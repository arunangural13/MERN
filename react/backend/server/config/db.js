const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo db connect successfully")

    }catch(err){
       console.log("mongo db is not connected")
       process.exit(1)
    }
}

module.exports = connectDB