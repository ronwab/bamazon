DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon ;
USE bamazon;

CREATE TABLE departments
(
    department_id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR
    (250),
over_head_costs INT

        );

    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Nissan', '2000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Toyota', '9000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Acura', '8000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Ford', '9000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Audi', '6000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Buick', '5000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Landrover', '4000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('BMW', '9000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Mazda', '4000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Pontiac', '2000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Volvo', '8000');
    INSERT INTO departments
        (department_name, over_head_costs)
    VALUES('Subaru', '7000');

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
    product_sales INT,
    department_id INT,
FOREIGN KEY
        (department_id) REFERENCES departments
        (department_id)

);

        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("Rogue", "Nissan", 20000, 10, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("Camry", "Toyota", 6000, 30, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("MDX", "Acura", 87000, 70, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("F-150", "Ford", 13000, 22, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("All Roads", "Audi", 4300, 65, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("All Roads ", "Buick", 89000, 1, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("Defender", "Landrover", 67000, 0, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("X5", "BMW", 34000, 32, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("MPV", "Mazda", 80000, 12, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("grand Am", "Pontiac", 10000, 4, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("XC", "Volvo", 240000, 9, 0);
        INSERT INTO products
            (product_name, department_name,price,stock_quantity,product_sales)
        VALUES("Legacy", "Subaru", 6000, 7, 0);





