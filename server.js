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

// Add employee
function addEmployee() {
  prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the first name of the employee?'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the last name of the employee?'
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'What is the role id of the employee?'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the manager id of the employee?'
    }
  ])
    .then((answer) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', '${answer.roleId}', '${answer.managerId}')`, (err, data) => {
        if (err) throw err
        init()
      })
    })
    .catch(err => console.log(err))
}

// Update employee roles
function roleUpdate() {
  db.query('SELECT * FROM employee', (err, data) => {
    if (err) throw err
    const employeeChoice = data.map((employee) => {
      return { name: employee.first_name, value: employee.id }
    })
    db.query('SELECT * FROM roles', (err, data) => {
      if (err) throw err
      const roleChoice = data.map((role) => {
        return { name: role.title, value: role.id }
      })
      prompt([
        {
          type: 'list',
          name: 'employee',
          message: 'Which employee do you want to update?',
          choices: employeeChoice
        },
        {
          type: 'list',
          name: 'role',
          message: 'Which role do you want to assign?',
          choices: roleChoice
        }
      ])
        .then((answer) => {
          db.query('UPDATE employee SET ? WHERE ?', [answer.employee, answer.role], (err, info) => {
            if (err) throw err
            init()
          })
        })
    })
  })
}
// View departments, roles, employees

// View all department
function viewDepartments() {
  db.query('SELECT * FROM emp_cmsa_db.department;', (err, departments) => {
    if (err) throw err
    console.table(departments)
    init()
  })
}

// View all roles
function viewRoles() {
  db.query('SELECT * FROM emp_cmsa_db.roles;', (err, roles) => {
    if (err) throw err
    console.table(roles)
    init()
  })
}

// View all employees
function viewEmployees() {
  db.query('SELECT * FROM emp_cmsa_db.employee;', (err, employees) => {
    if (err) throw err
    console.table(employees)
    init()
  })
}


    
init()   