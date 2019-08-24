/* eslint-disable */
const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  // console.log("We are connected");
  showAllProducts(); 
});

function showAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    const table = new Table({
      head: ['ID', 'Product', 'Department', 'Price', 'In Stock', 'Product Sales'],
      colWidths: [10, 30, 15, 10, 10, 15]
    });
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity, res[i].product_sales]);
    }
    console.log(table.toString());
  });
  whatToBuy();
}

function whatToBuy() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    inquirer
      .prompt([
        {
        name: "productID",
        type: "number",
        message: "Enter the ID for the product you would like to buy:"
        },
        {
        name: "units",
        type: "number",
        message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        let chosenProduct;
        let chosenProductPrice; 
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === answer.productID) {
            chosenProduct = results[i];
            chosenProductPrice = results[i].price;
          }
          // console.log(chosenProductPrice);
        }
        if (chosenProduct.stock_quantity < answer.units) {
          console.log("Insufficient quantity!");
        } else {
          console.log("Congratulations, your order was placed!");
          let updatedStockQuantity = chosenProduct.stock_quantity - answer.units;
          let updatedProductSales = answer.units * chosenProductPrice; 
          // console.log(updatedProductSales.toFixed(2));
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updatedStockQuantity, 
                product_sales: updatedProductSales.toFixed(2)
              },
              {
                product_name: chosenProduct.product_name
              }
            ],
            function(err) {
              if (err) throw err;
              connection.end();
            }
          );
          let cost = answer.units * chosenProduct.price; 
          let shortenedCost = cost.toFixed(2);
          console.log("Your total cost is: " + "$" + shortenedCost);
        }
      })
    })
}