require('dotenv').config();
let config = require('./config');
let mysql = require('mysql');
let inquirer = require('inquirer');



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
        connection.end();
    }
})

function showAllData() {
    connection.query('select * from products', (err, data) => {
        if (!err) {
            //    console.log(data);
            data.forEach(items => {
                console.log(`ITEM: ${items.product_name} PRICE: ${items.price} STOCK: ${items.stock_quantity}`);

            })
            promptPurchase()
        } else {
            console.log(err);

        }
    });
};


function promptPurchase() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter ID of item you would like to purchase",
                name: "ItemId",
                validate: function (ItemId) {

                    let validnum = /^[0-9]/;
                    if (ItemId.match(validnum)) {
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


        })
        .catch((err) => {
            return
        })


}

function validateInput(arg1) {
    if (arg1 === NaN) {
        console.log('Enter Valid number');
    }
}

showAllData()