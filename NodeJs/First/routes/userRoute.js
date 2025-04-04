const router=require('express').router()
const Friend=require('../api/friendModel')
console.log("router page")



router.post('/friend',(req,res)=>{
    let friendData= new Friend()
    friendDatadata.Friend_name=req.body.Fname
    friendDatadata.Friend_name=req.body.Femail
    friendDatadata.Friend_name=req.body.fphone
    friendData.save().then(()=>{
        res.json({
            status:200,
            status:true,
            data:friendData

    }).catch(err=>{
        res.json({
            message:err
            
        })
       
    })
    

    })
})

module.exports=router