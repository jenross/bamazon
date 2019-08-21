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
    connection.query("SELECT * FROM departments", function(err) {
      if (err) throw err;
  
      inquirer
        .prompt([
          {
          name: "options",
          type: "list",
          choices: ["View Product Sales by Department", "Create New Department"], 
          message: "What would you like to do?"
          },
        ])
        .then(function(answer) {
          switch(answer.options) {
            case 'View Product Sales by Department':
              viewProductSales();
              break;

            case 'Create New Department':
              createDepartment();
              break; 
          }
        })
    })
  }

function viewProductSales() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("-------------------------------------------------------------------------------------------");
            console.log("department_id: " + res[i].department_id + " | " + "department_name: " + res[i].department_name + " | " + "over_head_costs: " + res[i].over_head_costs + " | " + "product_sales " + " | " + "total_profit ");
        }
        console.log("************************************************************************************");
        });
}

function createDepartment() {
    console.log("Getting there.");
}