const User = require("./userModel")
const bcrypt = require("bcryptjs")

const addUser = async(req,res) =>{
    try{
        const validation  = [] 
        const {name,phone,email,password,userType} = req.body
        if(!name || typeof name !== "string"){
            validation.push("name is required and type must be string")
        }
        if(!email || typeof email !=="string"){
            validation.push("email is required and type must be string")
        }
        if(!phone || typeof phone !=="string"){
            validation.push("Phone Number is required and type must be string")
        }
        if(!password || typeof password !=="string"){
            validation.push("Password is required and type must be string")
        }
        
        if(!["user","donor"].includes(userType)){
            validation.push("user type not macth")
        }
        



        if(validation.length > 0){
            return res.json({
                status:400,
                success:false,
                message:"validation error",
                error:validation
            })
        }

        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.json({
                status:403,
                success:false,
                message:"user already exist",

            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        console.log(hashedPassword)

        const user = new User({
            name,
            phone,
            email,
            password:hashedPassword,
            userType
        })

        await user.save()

        res.json({
            status:201,
            success:true,
            message:"user is created successfully",
            data:user
        })

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })
    }
}


const getuser = (req,res)=>{
    User.find().then (data=>{
      res.json({
      status:200,
      success:true,
      alluser:data

      })
    
     })
    .catch(err=>{
      res.json({
        message:err
      })
    })
}

const singleuser = async (req,res)=>{
    try{
    const {name} = req.body
    if(!name){
        return res.json({
            status:400,
            success:false,
            message:"name is required"
        })
    }

    const user = await User.findOne({name})
    if(!user){
        return res.json({
            status:404,
            success:false,
            message:"user is not found",
        
        })
    }

    return res.json({
        status:200,
        success:true,
        message:"user is get successfully",
        data:user
    })

     
}catch(err){
    res.json({
        status:500,
        success:false,
        message:"internal server error",
        error:err.message
    })
}
}


const getUserById = async(req,res) =>{
    try{
        const {id} = req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findById(id)
        if(!user){
            return res.json({
                status:404,
                success:false,
                message:"user is not found "
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user is get successfully",
            data:user
        })

    }catch(err){
      res.json({
        status:500,
        success:false,
        message:"internal server error",
        error:err.message
      })
    }
}

const updateUser = async(req,res) =>{
    try{
        const {id,...data} = req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const ids  = await User.findById(id)
            if(!ids){
                return res.json({
                    status:404,
                    success:false,
                    message:"user not found"
                })
            }
        
            const user = await User.findByIdAndUpdate(
                id,
                data,
                {new:true}
            )

            if(!user){
                return res.json({
                    status:404,
                    success:false,
                    message:"user is not updated"
                })
            }

            res.json({
                status:200,
                success:true,
                message:"user updated successfully",
                data:user
            })

    }catch(err){
       res.json({
        status:500,
        success:false,
        message:"internal server error",
        error:err.message
       })
    }
}


const deleteUser = async (req, res) => {
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.json({
          status: 400,
          success: false,
          message: "id is required"
        });
      }
  
      const user = await User.findById(id);
  
      if (!user) {
        return res.json({
          status: 404,
          success: false,
          message: "user not found"
        });
      }
  
      await User.findByIdAndDelete(id);
  
      res.json({
        status: 200,
        success: true,
        message: "user deleted successfully"
      });
  
    } catch (err) {
      res.json({
        status: 500,
        success: false,
        message: "internal server error",
        error: err.message
      });
    }
  };
  



module.exports = {addUser,getuser,getUserById,singleuser,updateUser,deleteUser}