require('dotenv').config();
let config = require('./config')
let inquirer = require('inquirer');
let mysql = require('mysql');
var connection = require('./connection').connection //is this correct?
// connection.connect() {   //why wont this work?
//     err ? return err : start()
// }

connection.connect((err) => {
    if (err) console.log(err);
    promptSupervisor()
})


function promptSupervisor() {
    inquirer
        .prompt([{
            type: "list",
            name: "supervisorChoices",
            message: 'Whatcha wanna do boss',
            choices: [
                'View Product Sales by Department',
                'Create New Department'
            ]
        }]).then((data) => {
            console.log(data);

            switch (data.supervisorChoices) {

                case 'View Product Sales by Department':
                    viewProducts()
                    break;
                case 'Create New Department':
                    createNewDept()
                    break;
                default:
                    console.log('Invalid option selected');
            }
        })
        .catch((err) => {
            console.log(err);
        })

}

function viewProducts() {
    connection.query('SELECT * FROM products', (data, err) => {
        if (err) {
            console.log(err);

        } else {
            data.forEach(individualItems => {
                return individualItems.product_name
                total
            })

        }
    })
}