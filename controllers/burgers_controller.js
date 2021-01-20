var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', async function(req, res){
  let data = await burger.selectAll();
  res.render('index', {burgers: data})
})

router.post("/api/burgers", async function(req, res) {
  
  const result = await burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);

  res.status(200).end();
});


router.put("/api/burgers/:id", async function(req, res) {
  
    let columnName = "id";
    let columnValue = req.params.id;
    let condition = columnName + ' = ' + columnValue;
  
    const result = await burger.updateOne({ devoured: true }, condition);
    console.log(result)
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
  
    res.status(200).end();
  });


router.delete("/api/burgers/:id", async function(req, res) {
  
    let columnName = "id";
    let columnValue = req.params.id;
  
    const result = await burger.deleteOne(columnName, columnValue);
  
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
  
    res.status(200).end();
  });

// Export routes for server.js to use.
module.exports = router;