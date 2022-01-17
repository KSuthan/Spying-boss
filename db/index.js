

const connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }


    
    findAllDepartments(){
        return this.connection.promise().query(
        "select id as dept_id, name as department from department ORDER BY ID ASC;"
        )
    }


    findAllroles(){
        return this.connection.promise().query(
        "SELECT roles.id, roles.title, department.name AS department FROM roles INNER JOIN department ON roles.department_id = department.id ORDER BY ID ASC;"
            ) 
    
        }












}

module.exports = new DB(connection);