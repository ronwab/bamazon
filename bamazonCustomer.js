require("dotenv").config();
let config = require("./config");
let mysql = require("mysql");
let inquirer = require("inquirer");
let itemQty = 0;
let availqty = 0;
let remainingStock = 0;
let itemfield = "";
let price = 0;
let totalbill = 0;
var connection = require("./connection").connection;

connection.connect(err => {
    if (err) throw err;

    showAllData();
});

function showAllData() {
    connection.query("select * from products", (err, data) => {
        if (err) {
            return err;
        } else {
            if (data.length == 0) {
                console.log("Either table is empty or does not exist");
                return;
            } else {
                data.forEach(items => {
                    console.log(
                        `ITEM: ${items.product_name} PRICE: ${items.price} STOCK: ${
              items.stock_quantity
            }`
                    );
                });
            }
            promptPurchase();
        }
        // promptPurchase();
    });
}

function promptPurchase() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter Name of item you would like to purchase",
                name: "NameId",
                validate: function (NameId) {
                    let validaName = /^[a-zA-Z]/;
                    if (NameId.match(validaName)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "How many ?",
                name: "itemQty",
                validate: function (itemQty) {
                    let validnum = /^[0-9]/;
                    if (itemQty.match(validnum)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            itemQty = data.itemQty;
            itemfield = data.NameId.toLowerCase();

            checkQuantity(data.NameId);
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}

function checkQuantity(id) {
    connection.query(
        "SELECT stock_quantity, price FROM  products WHERE ?",
        [{
            product_name: id
        }],
        (err, res) => {
            if (err) {
                console.log(err);
            } else {
                if (res.length == 0) {
                    console.log("NOT found ");
                    promptPurchase();
                } else {
                    availqty = res[0].stock_quantity;
                    price = res[0].price;
                    return compareqty(availqty);
                }
            }
        }
    );
}

function compareqty(qty) {
    console.log(`Avail ${availqty}`);
    console.log(`order ${itemQty}`);

    if (availqty > itemQty) {
        remainingStock = availqty - itemQty;

        // calcBill(itemQty, price);
        updateDB(remainingStock, itemfield);
    } else {
        console.log("Nope out of stock");
        whatNext();
    }
}

function whatNext() {
    inquirer
        .prompt([{
            type: "confirm",
            name: "keepShoppin",
            message: "Keep Shoppin ??"
        }])
        .then(keepShoppin => {
            console.log(keepShoppin);
            keepShoppin ? showAllData() : connection.end();
        })
        .catch(err => {
            console.log(err);
        });
}

function updateDB(bal, fieldTOUpdate) {
    connection.query(
        "UPDATE products SET stock_quantity =?   WHERE product_name=?",
        [bal, fieldTOUpdate]
    );
    continueShoping();
}

function continueShoping() {
    inquirer
        .prompt([{
            type: "confirm",
            name: "continueshoppin",
            message: "Still Shoppin ??"
        }])
        .then(shoppin => {
            console.log(shoppin.continueshoppin);
            if (shoppin) {
                showAllData()
            } else {
                console.log("Your purchase was successful. Thanks for shopping Bamazon!");
                exit()
            }
            //   shoppin ? showAllData() : connection.end();
        })
        .catch(err => {
            console.log(err);
        });
}

function exit() {
    connection.end();
}