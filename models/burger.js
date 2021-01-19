// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: async function (table) {
      let data = await orm.selectAll("burgers")
      return data
    },
 
    // The variables cols and vals are arrays.
    insertOne: async function(columnName, columnValue, cb) {
      const results = await orm.insertOne("burgers", columnName, columnValue);
    
      return results;
    },
    
    updateOne: async function(columnName, columnValue, cb) {
      const results = await orm.updateOne("burgers", columnName, columnValue);
    
      return results;
    },

    deleteOne: async function (columnName, columnValue, cb) {

        const results = await orm.deleteOne("burgers", columnName, columnValue);
    
        return results;
    
      }

  };

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;