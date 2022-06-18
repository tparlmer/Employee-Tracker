// set up inquirer
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectOption",
        message: "Choose an option:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((answers) => {
      // "View all departments"
      if (answers.selectOption === "View all departments") {
        // viewAllDepartments();
      }

      // "View all roles"
      if (answers.selectOption === "View all roles") {
        // viewAllRoles();
      }

      // "View all employees"
      if (answers.selectOption === "View all employees") {
        // viewAllEmployees();
      }

      // "Add a department"
      if (answers.selectOption === "Add a department") {
        // addDepartment();
      }

      // "Add a role"
      if (answers.selectOption === "Add a role") {
        // addRole();
      }

      // "Add an employee"
      if (answers.selectOption === "Add an employee") {
        // addEmployee();
      }

      // "Update an employee role"
      if (answers.selectOption === "Update an employee role") {
        // updateEmployeeRole();
      }
    });
};

// VIEW ALL DEPARTMENTS

function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });


// VIEW ALL ROLES

// VIEW ALL EMPLOYEES

// ADD A DEPARTMENT

// ADD A ROLE

// ADD AN EMPLOYEE

// UPDATE AN EMPLOYEE ROLE

// START APPLICATION
promptUser();