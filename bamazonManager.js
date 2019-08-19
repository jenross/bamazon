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
  menuOptions(); 
});

function menuOptions() {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
  
      inquirer
        .prompt([
          {
          name: "options",
          type: "list",
          choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"], 
          message: "What would you like to do?"
          },
        ])
        .then(function(answer) {
          // get the information of the chosen item
          console.log(answer);
          if(answer.options === 'View Products for Sale') {
            connection.query("SELECT * FROM products", function(err, res) {
              if (err) throw err;
              for (var i = 0; i < res.length; i++) {
                console.log("-------------------------------------------------------------------------------------------");
                console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Dept: " + res[i].department_name + " | " + "$" + res[i].price + " | " + "# In-Stock: " + res[i].stock_quantity);
              }
              console.log("************************************************************************************");
            });
          } else if (answer.options === 'View Low Inventory') {
            connection.query("SELECT * FROM products", function(err, res) {
              if (err) throw err;
              for (var i = 0; i < res.length; i++) {
                if (res[i].stock_quantity < 5) {
                  console.log("-------------------------------------------------------------------------------------------");
                  console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Dept: " + res[i].department_name + " | " + "$" + res[i].price + " | " + "# In-Stock: " + res[i].stock_quantity);
                }
              }
              console.log("************************************************************************************");
            });
          }
          // let chosenProduct;
          // for (var i = 0; i < results.length; i++) {
          //   if (results[i].id === answer.productID) {
          //     chosenProduct = results[i];
          //   }
          // }
      //     if (chosenProduct.stock_quantity < answer.units) {
      //       console.log("Insufficient quantity!");
      //     } else {
      //       console.log("Congratulations, your order was placed!");
      //       updatedStockQuantity = chosenProduct.stock_quantity - answer.units;
      //       // console.log(updatedStockQuantity);
      //       connection.query(
      //         "UPDATE products SET ? WHERE ?",
      //         [
      //           {
      //             stock_quantity: updatedStockQuantity 
      //           },
      //           {
      //             product_name: chosenProduct.product_name
      //           }
      //         ],
      //         function(err) {
      //           if (err) throw err;
      //           // console.log(res.affectedRows + " products updated!\n");
      //           connection.end();
      //         }
      //       );
      //       // logs the actual query being run
      //       // console.log(query.sql);
      //       let cost = answer.units * chosenProduct.price; 
      //       console.log("Your total cost is: " + "$" + cost);
      //     }
        })
      });
}

