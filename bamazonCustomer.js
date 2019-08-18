const mysql = require("mysql");
const inquirer = require("inquirer");

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
  console.log("We are connected");
  showAllProducts(); 
});

function showAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("------------------------------------------------------------------------------------");
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("************************************************************************************");
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
        message: "Enter the ID# for the product you would like to buy"
        },
        {
        name: "units",
        type: "number",
        message: "How many units of the product would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        let chosenProduct;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === answer.productID) {
            chosenProduct = results[i];
          }
        }
      })
    })
    connection.end();
}