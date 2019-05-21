require('dotenv').config();
let inquirer = require('inquirer');
let config = require('./config.js');
let mysql = require('mysql');

var connection = require('./connection').connection

connection.connect((err) => {
    if (err) {
        return err;
    } else {
        start();
    }
})

function start() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'What do you want to do ?',
            name: 'inputoption',
            choices: [
                'View Products for Sale',
                'View Low Inventory',
                'Add to Inventory',
                'Add New Product'
            ]
        }]).then((data) => {
            console.log(data.inputoption);
            switch (data.inputoption) {
                case 'View Products for Sale':
                    viewProducts();
                    break;

                case 'View Low Inventory':
                    viewILownventory();
                    break;

                case 'Add to Inventory':
                    addInventory();
                    break;
                case 'Add New Product':
                    addNewProduct();
                    break;

                default:
                    break;
            }

        })
}

function viewProducts() {
    connection.query('SELECT * FROM products', (err, data) => {
        if (err) {
            console.log(err);

        } else {
            data.forEach(individualItems => {
                console.log(`ITEM: ${individualItems.product_name} PRICE: ${individualItems.price} STOCK: ${individualItems.stock_quantity}`)
            })

        }
    })

}

function viewILownventory() {
    connection.query('SELECT * FROM products WHERE stock_quantity <=5', (err, data) => {
        if (err) {
            console.log(err);

        } else {

            if (data.length == 0) {
                console.log('No low inventory items');

            } else {
                data.forEach(individualItems => {
                    console.log(`ITEM: ${individualItems.product_name} PRICE: ${individualItems.price} STOCK: ${individualItems.stock_quantity}`)
                })
            }

        }
    })
}

function addInventory() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'select Product to update inventory',
            name: 'prodname'
        }]).then((data) => {
            console.log(data);
            ('SELECT * FROM products', (err, data) => {
                if (err) throw err;
                console.log(data);

            })
        })
        .catch((err) => {
            console.log(err);

        })
}

function availprods() {
    connection.query('SELECT * FROM products WHERE stock_quantity <=5', (data, err) => {
        if (err) {
            console.log(err);

        } else {
            if (data.length == 0) {
                console.log('No low inventory items');

            } else {
                data.forEach(individualItems => {
                    return individualItems.product_name
                })
            }

        }

    })

}

function addNewProduct() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'product_name',
                message: "Enter product Name"
            },
            {
                type: 'input',
                name: 'department_name',
                message: "Enter Department Name"
            },
            {
                type: 'input',
                name: 'price',
                message: "Enter Price"
            },
            {
                type: 'input',
                name: 'stock_quantity',
                message: "Enter Quantity"
            },

        ]).then((data) => {

            connection.query('INSERT INTO products SET ?', [{
                product_name: data.product_name,
                department_name: data.department_name,
                price: data.price,
                stock_quantity: data.stock_quantity
            }], (err, data) => {
                if (err) {
                    console.log(err);
                } else {

                    console.log('Added successfully');
                }
            })

        }).catch((err) => {
            console.log(err);

        })
}
