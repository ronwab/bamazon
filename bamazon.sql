DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon ;
USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT  PRIMARY KEY,
    product_name VARCHAR
    (100),
    department_name VARCHAR
    (20),
    price INT
    (10),
    stock_quantity INT
    (10),
    product_sales INT

);


    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Rogue", "Nissan", 4500, 10);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Camry", "Toyota", 6000, 30);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Edge", "Ford", 87000, 70);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("F-150", "Ford", 13000, 22);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Altima", "Nissan",4300, 65);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("RAV4", "Toyota", 89000, 1);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Highlander", "Toyota", 67000, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("X5", "BMW", 34000, 32);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("MPV", "Mazda", 80000, 12);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Prius", "Toyota", 10000, 4);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Tacoma", "Toyota", 240000, 9);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Cube", "Nissan", 6000, 7);


    CREATE TABLE departments
    (
        department_id INT NOT NULL
        AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR
        (250),
over_head_costs INT 

)



