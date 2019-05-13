require('dotenv').config();
let config = require('./config');
let mysql = require('mysql');
let inquirer = require('inquirer');
let itemQty = 0
let availqty = 0;
let remainingStock = 0
let NameId



var connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    port: config.db_port,
    database: config.db_name
})

connection.connect((err) => {
    if (err) {
        return err;
    } else {
        showAllData();

    }
})

function showAllData() {
    connection.query('select * from products', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            data.forEach(items => {
                console.log(`ITEM: ${items.product_name} PRICE: ${items.price} STOCK: ${items.stock_quantity}`);
            })
        }
        promptPurchase()
    });
};


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
        ]).then((data) => {
            console.log(data);
            itemQty = data.itemQty;
            checkQuantity(data.NameId)
        })
        .catch((err) => {
            console.log(err)
            return false;

        })
}

function checkQuantity(id) {

    connection.query('SELECT stock_quantity FROM  products WHERE ?', [{
        product_name: id
    }], (err, res) => {
        if (err) {
            console.log('Item not Found');

        } else {
            console.log(`*****************${res}*************`);

            availqty = res[0].stock_quantity;
            //console.log(res[0].stock_quantity); //How do I return this value?
            compareqty(availqty)

        }

    })

}

function compareqty(qty) {
    console.log(`Avail ${availqty}`);
    console.log(`order ${itemQty}`);

    if (availqty > itemQty) {
        console.log('lets talk');
        remainingStock = availqty - itemQty;

        connection.query("UPDATE products SET" + remainingStock + " WHERE " + fieldTOUpdate + "")
        // completePurchase(remainingStock, NameId)

    } else {
        console.log('Nope out of stock');

    }
}

function completePurchase(bal, fieldTOUpdate) {

    connection.query("UPDATE products SET" + bal + " WHERE " + fieldTOUpdate + "")
    connection.query('UPDATE products SET ?  WHERE ?', [{
            stock_quantity: bal
        },
        {
            product_name: fieldTOUpdate
        }
    ], (err, data) => {
        console.log(data);

    })

    continueShoping()

}
// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

// - - -

function continueShoping() {
    inquirer
        .prompt([{
                type: 'confirm',
                name: 'continueshoppin',
                message: "Still Shoppin ??"
            }

        ]).then((shoppin) => {
            console.log(data.continueshoppin);
            shoppin ? showAllData() : connection.end();

        }).catch((err) => {
            console.log(err);

        })

}

function validateInput(arg1) {
    if (arg1 === NaN) {
        console.log('Enter Valid number');
    }
}

showAllData()
// connection.end();