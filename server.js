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

 // Function for adding departments, roles and employees

  // Add department
  function addDepartment() {
    prompt([
      {
        type: 'input',
        name: 'newDepartment',
        message: 'What department do you want to add?'
      }
    ])
      .then((answer) => {
        db.query(`INSERT INTO department (name) VALUES ('${answer.newDepartment}')`, (err, data) => {
          if (err) throw err
          init()
        })
      })
      .catch(err => console.log(err))
  }

 // Add role
 function addRole() {
  prompt([
    {
      type: 'input',
      name: 'newRole',
      message: 'What role do you want to add?'
    },
    {
      type: 'input',
      name: 'newSalary',
      message: 'What is the salary for this role?'
    },
    {
      type: 'input',
      name: 'newDepartmentId',
      message: 'What is the department id for this role?'
    }
  ])
    .then((answer) => {
      db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answer.newRole}', '${answer.newSalary}', '${answer.newDepartmentId}')`, (err, data) => {
        if (err) throw err
        init()
      })
    })
    .catch(err => console.log(err))
}

