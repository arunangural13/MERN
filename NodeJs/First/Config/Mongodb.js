const mongodb = require("mongoose");

 mongodb.connect('mongodb://localhost:27017/Batch1')
 .then(()=>{
    console.log("Database connected successfully")
 })
 .catch(err =>{
    console.log("Error in connection")
 })