

const connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }


    
    findAllDepartments(){
        return this.connection.promise().query(
        "select id as dept_id, name as department from department;"
        )
    }












}

module.exports = new DB(connection);