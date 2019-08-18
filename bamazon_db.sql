DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(175) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blink xt2", "smart home", 99.99, 15000),
       ("kitchenaid mixer", "home & kitchen", 335.29, 2500), 
       ("bose soundlink headphones", "headphones", 195.18, 10500), 
       ("paper mate felt tip pens", "office & school supplies", 9.96, 25600),
       ("echo dot", "smart home", 29.99, 28300), 
       ("apple airpods", "headphones", 144.52, 1500), 
       ("martin smith ukulele", "musical instruments", 19.99, 1300), 
       ("jameson guitars 5-string banjo", "musical instruments", 154.95, 4200),
       ("samsung 50-inch smart tv", "television & video", 397.99, 675), 
       ("ring doorbell", "smart home", 99.99, 9400);