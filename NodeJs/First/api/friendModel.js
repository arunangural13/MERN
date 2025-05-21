const mongoose = require('mongoose')

const friendSchema= new mongoose.Schema({
    friend_name:{default:'',type:String},
    friend_email:{type:String,default:''},
    friend_phone:{type:String,default:'123321221'}
})

module.exports= mongoose.model("friend",friendSchema)