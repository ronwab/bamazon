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
    (10)

);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Rogue", "Nissan", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Camry", "Toyota", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Edge", "Ford", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("F-150", "Ford", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Altima", "Nissan", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("RAV4", "Toyota", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Highlander", "Toyota", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("X5", "BMW", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("MPV", "Mazda", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Prius", "Toyota", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Tacoma", "Toyota", 20000, 20);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity)
    VALUES("Cube", "Nissan", 20000, 20);

    