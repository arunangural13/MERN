const express= require ('express')
const mongoose =  require ('mongoose')
const bodyParser= require('body-parser')
const app = express()

mongoose.connect("mongodb://localhost:27017/Officialpro", {
})
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.error("Error in connection:", err);
});




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
   console.log("server is started")
});