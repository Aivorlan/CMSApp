//Dependencies 

let prompt = require('inquirer').createPromptModule()
let db = require('./db')

 // Command-line questions 
 function init() {
  prompt([
    {
      type: 'list',
      name: 'startMenu',
      message: 'What would you like to do?',
      choices: [
        'View all department',
        'View all roles',
        'View all employees',
        'Add department',
        'Add role',
        'Add employee',
        'Update employee role',
        'Exit'
      ]
    }
  ])
    .then(({ startMenu }) => {
      switch (startMenu) {
        case 'View all department':
          viewDepartments()
          break
        case 'View all roles':
          viewRoles()
          break
        case 'View all employees':
          viewEmployees()
          break
        case 'Add department':
          addDepartment()
          break
        case 'Add role':
          addRole()
          break
        case 'Add employee':
          addEmployee()
          break
        case 'Update employee role':
          roleUpdate()
          break
        case 'Exit':
          process.exit()
          break
      }
    })
    .catch(err => console.log(err))
  }

  