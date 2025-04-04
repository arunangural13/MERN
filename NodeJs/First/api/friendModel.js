const mongoose =(require('mongoose'))
const friendschema= new mongoose.schema({
    friend_name:{default:'',type:string},
    friend_email:{default:'',type:string},
    friend_phone:{default:'123321221',type:int}
})
module.exports=mongoose.model("friend",friendschema)