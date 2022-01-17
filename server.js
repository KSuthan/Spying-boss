
const inquirer = require("inquirer");
const { connection } = require("./db");
const db = require("./db")


init();

function init() {
    console.log("***********************************************")
    console.log(" ❤ ❤ ❤   Welcome to Employee Manager! ❤  ❤  ❤")
    console.log("***********************************************")
    mainMenu()

}

function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [ "View Departments",  "View Roles", "View Employees",
                        "Add Department", "Add Role" ,"Add Employee",
                        "Update employee role", "Update employee managers",
                        "View by manager", "View by department",
                        "Delete Department", " Delete Roles", "Delete employee",
                        "total budget" , "budget by department", " Exit Employee Tracker"],
                        pageSize: 10
        }
    ])
    .then(response =>{
        console.log(response)
        let userChoice = response.choice;
        console.log(userChoice)
        switch( userChoice ) {
            case "View Departments":
                viewDept();
                 break;
             case "View Roles":
                viewRoles();
                 break;
            case "View Employees":
                viewEmployees();
                break;
             case "Add Department":
                addDDept();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                 break;
            case  "Update employee role":
                updateEmpRole();
                 break;
            case "Update employee managers":
                updatEmpman();
                break;
            case "View by manager":
                viewByman();
                break;
            case "View by department":
                viewbyDept();
                break;
            case  "Delete Department":
                delDept();
                break;
            case "Delete Roles":
                delRole();
                break;
             case "Delete employee":
                delEmp();
                break;
            case "total budget":
                tolBudget();
                 break;
            case   "budget by department":
                 budbyDept();
                 break;
            case" Exit Employee Tracker":
                quit();
                break;
    }
})
}

// -------Function view all department------
function viewDept() {
    db.findAllDepartments()
      .then(([rows]) => {
          let employees = rows;
          console.table(employees)
      })
      .then(() => mainMenu())
  
  }

  // -------Function view all roles------
function viewRoles() {
    db.findAllroles()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => mainMenu())
}

  // -------Function view all employee------
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees1 = rows;
            console.table(employees1)
        })
        .then(() => mainMenu())
}