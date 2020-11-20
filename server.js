//Dependencies 

const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require('console.table');
const path = require('path');
require('dotenv').config();

//Port connection 

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "4971645Jh!",
    database: "employees_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    startup();
  });

function startup() {
    inquirer.prompt({
        name: "BLM",
        type: "rawlist",
        message: "What would you like to do?",
        choices:[
            "View current workplace",
            "Add to workplace",
            "Remove from workplace"
        ]
    })
    .then(function(answer){
        switch (answer.BLM) {
            case "View current workplace":
                viewSwitch();
                break;

            case "Add to workplace":
                addSwitch();
                break;

            case "Remove from workplace":
                removeSwitch();
                break;

        }
    })
};


