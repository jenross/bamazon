# Bamazon

## About 

Bamazon is a command-line application for an Amazon-like storefront. It utilizes Node.js &MySQL to process customer orders, update inventory, and track total profits (by department) and individual product sales. At the manager level, users can check low inventory, add to inventories, and add new products. At the supervisor level, users can view products, overhead costs, and total profits by department. They can also create a new department. 

## Technologies Used 

* Git 
* GitHub
* JavaScript
* SQL 
* MySQL Workbench
* Node.js
* Node packages: 
    * MySQL 
    * Inquirer 
    * CLI Table 

## How to Use It

### Intiial Setup 

1. Make sure [Node.js](https://nodejs.org/en/) and [MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html) are installed on your computer. 
2. Make sure you have a MySQL client, such as [MySQL Workbench](https://www.mysql.com/products/workbench/), installed that will allow you to administer/access the database. 
3. Open MySQL Workbench (or any MySQL client you prefer) and run the [bamazon_db.sql](https://github.com/jenross/bamazon/blob/master/bamazon_db.sql) code to create the database, as well as the "products" and "departments" tables. 
4. Open your computer's Command Line Interpreter (CLI) and navigate to the folder/directory where you would like to save and run this application. 
5. Run ```git clone https://github.com/jenross/bamazon.git```
6. Navigate to the directory for the project (```cd Bamazon```).
7. Run ```npm install``` to download all of the required node modules. 

### Customer Interface 

1. Run ```node bamazonCustomer.js```. 
2. 