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

  

