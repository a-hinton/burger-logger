var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', async function(req, res){
  let data = await burger.selectAll();
  res.render('index', {data:[]})
})

router.update("/api/burger/:id", async function(req, res) {
  
    let columnName = "id";
    let columnValue = req.params.id;
  
    const result = await burger.updateOne(columnName, columnValue);
  
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
  
    res.status(200).end();
  });


router.delete("/api/burger/:id", async function(req, res) {
  
    let columnName = "id";
    let columnValue = req.params.id;
  
    const result = await burger.deleteOne(columnName, columnValue);
  
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
  
    res.status(200).end();
  });