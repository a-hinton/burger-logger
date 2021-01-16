// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: async () => {
      let data = await orm.selectAll("burgers")
      return data
    },
 
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      // orm.create("burgers", cols, vals, function(res) {
      //   cb(res);
      // });
    },
    
    updateOne: function(objColVals, condition, cb) {
      // orm.update("burgers", objColVals, condition, function(res) {
      //   cb(res);
      // });
    },

    deleteOne: async function (columnName, columnValue, cb) {

        const results = await orm.deleteOne("burgers", columnName, columnValue);
    
        return results;
    
      }

  };

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;