require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async(req,res) =>{
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO DB IS CONNECT SUCCESSFULLY")

    }catch(err){
       console.log("MONGO DB IS NOT CONNECTED DUE TO ERROR:",err)
       process.exit(1)
    }
}


module.exports = connectDB