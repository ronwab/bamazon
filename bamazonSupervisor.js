require('dotenv').config();
let config = require('./config')
let inquirer = require('inquirer');
let mysql = require('mysql');
var connection = require('./connection').connection
let newdept = ''
let overhead = ''

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
                "View Product Sales by Department",
                "Create New Department"
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


    connection.query('SELECT * FROM products', (err, data) => {
        if (err) {
            console.log(err);

        } else {

            data.forEach(items => {
                console.log(`ITEM: ${items.product_name} DEPARTMENT: ${items.department_name}`);
            })
        }
    })
}

function createNewDept() {
    inquirer
        .prompt([{
            type: "input",
            name: "newdept",
            message: 'Enter name of new department'

        }, {
            type: "input",
            name: "overhead",
            message: 'Enter name of Overhead  cost'

        }]).then(data => {
            newdept = data.newdept
            overhead = data.overhead

            connection.query('INSERT INTO departments SET ? ', [{
                department_name: newdept
            }, {
                over_head_costs: overhead
            }], (err, data) => {

                if (err) throw err;
                console.log('Department Added');
            })




        })
}