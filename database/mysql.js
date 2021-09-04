const mysql = require('mysql');



function execute_sql(sql, params){
    const conn_config = {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PSWD,
      database : process.env.DB_SCHEMA,
      multipleStatements: true
    }
    const connection = mysql.createConnection(conn_config);
    return new Promise((resolve, reject) => {
      connection.query(sql, params, function (error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
        }
        resolve(results)
      });
    })
}

module.exports = {
    execute_sql
}