// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (table) { 
      const query = `SELECT * FROM ${table};`;
      return connection.promise().query(query);
    },

    insertOne: function (table) {

    },
    
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: async function(tableName, columnName, columnValue) {
        // let SQL_STATEMENT = `DELETE FROM ?? 
        //                      WHERE ?? = ?`;
    
        try {
            const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [tableName, columnName, columnValue]);
            return rows;
        } catch (error) {
            console.log(error);
        }
      },

    deleteOne: async function(tableName, columnName, columnValue) {
      let SQL_STATEMENT = `DELETE FROM ?? 
                           WHERE ?? = ?`;
  
      try {
          const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [tableName, columnName, columnValue]);
          return rows;
      } catch (error) {
          console.log(error);
      }
    }
  };

// Export the orm object for the model (burger.js).
module.exports = orm;