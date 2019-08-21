DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(175) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INT,
  product_sales DECIMAL(10,2) default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blink XT2", "Smart Home", 99.99, 15000),
       ("Kitchenaid Mixer", "Home & Kitchen", 335.29, 2500), 
       ("Bose Soundlink Headphones", "Headphones", 195.18, 10500), 
       ("Paper Mate felt tip pens", "Office & School Supplies", 9.96, 25600),
       ("Echo Dot", "Smart Home", 29.99, 28300), 
       ("Apple Airpods", "Headphones", 144.52, 4), 
       ("Martin Smith Ukulele", "Musical Instruments", 19.99, 1300), 
       ("Jameson Guitars 5-string Banjo", "Musical Instruments", 154.95, 4200),
       ("Samsung 50-inch Smart TV", "Television & Video", 397.99, 675), 
       ("Ring Doorbell", "Smart Home", 99.99, 9400);

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(75) NOT NULL,
  over_head_costs INT,
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Smart Home", 15000),
       ("Home & Kitchen", 7500);