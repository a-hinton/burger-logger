// Import MySQL connection.
var connection = require("../config/connection.js");

// ==========================Helper Functions================================

// Helper function that pushes an appropriate number of question marks to SQL
// query based on number of values that need to be passed
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// =======================End Helper Functions================================

// ==========================SQL Statements===================================

// Object for all our SQL statement functions.
var orm = {
    selectAll: async function (table) { 
      let SQL_STATEMENT = `SELECT * FROM ${table};`;

      try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
    },

    insertOne: async function(tableName, columnName, columnValue) {
      let SQL_STATEMENT = `INSERT INTO ${tableName} (${columNames.toString()})
                          VALUES (${printQuestionMarks(vals.length)})`;                          
  
      try {
          const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [tableName, columnName, columnValue]);
          return rows;
      } catch (error) {
          console.log(error);
      }
    },
    
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: async function(tableName, columnName, condition) {
        let SQL_STATEMENT = `UPDATE ${tableName}
                            SET ${objToSql(objColVals)}
                            WHERE ${condition}`;                           
    
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

  // =========================End SQL Statements=============================

// Export the orm object for the model (burger.js).
module.exports = orm;