const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:""
    },
    phone:{
        type:String,
        required:true,
        default:""
    },
    email:{
        type:String,
        required:true,
        default:""
    },
    password:{
        type:String,
        required:true,
        default:""
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    userType:{
        type:String,
        enum:["admin","user","donor"],
        default:""
    }
})



const User = mongoose.models.User || mongoose.model("User",userSchema)
module.exports = User




