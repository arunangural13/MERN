const Friend = require('../api/friendModel')

exports.addFriend= async(req,res)=>{

   let friendData = new Friend({
        friend_name: req.body.fname,
        friend_email: req.body.femail,
        friend_phone: req.body.fphone
      });
    
      friendData.save()
        .then((data) => {
          res.json({ 
            success: true, 
            message: "Data inserted successfully.",
            data 
          });
        })
        .catch((err) => {
          res.status(500).json({ 
            success: false,
            message: "Failed to insert data.",
            error: err.message 
          });
        });
      }



exports.getFriends = (req,res)=>{
          Friend.find().then (data=>{
            res.json({
            status:200,
            success:true,
            allFriend:data

            })
          
           }
          )
          .catch(err=>{
            res.json({
              message:err
            })
          })
}

exports.singleFriend = (req,res)=>{
  Friend.findOne({friend_name:req.body.fname})
  .then (data=>{
    res.json({
    status:200,
    success:true,
    allFriend:data

    })
  
   }
  )  .catch(err=>{
    error:err
  })  
}
