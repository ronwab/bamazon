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
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Rogue", "Nissan", 20000, 10, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Camry", "Toyota", 6000, 30, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Edge", "Ford", 87000, 70, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("F-150", "Ford", 13000, 22, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Altima", "Nissan", 4300, 65, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("RAV4", "Toyota", 89000, 1, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Highlander", "Toyota", 67000, 0, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("X5", "BMW", 34000, 32, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("MPV", "Mazda", 80000, 12, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Prius", "Toyota", 10000, 4, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Tacoma", "Toyota", 240000, 9, 0);
    INSERT INTO products
        (product_name, department_name,price,stock_quantity,product_sales)
    VALUES("Cube", "Nissan", 6000, 7, 0);


    CREATE TABLE departments
    (
        department_id INT NOT NULL
        AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR
        (250),
over_head_costs INT 

)



