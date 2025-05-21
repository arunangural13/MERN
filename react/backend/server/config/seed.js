// const User = require("../api/user/userModel")
const User = require("../api/user/userModel")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const seedAdmin = async(req,res) =>{
    try{
        const user = await User.findOne({email: "admin@gmail.com"});
        if (!user) {
            const hashedPassword = await bcrypt.hash("123456",10);
            const adminObj = new User ({
                name:"admin",
                email: "admin@gmail.com",
                password: hashedPassword,
                phone:"546546548",
                address:"india",
                userType:"admin"

            
                    })
                await adminObj.save();
                console.log("admin created successfully")
        
         } 
                console.log("admin already exists");
        }
            catch (err) {
                console.log("error seeding admin:", err);
            }
        }



        const adminLogin = async(req,res) =>{
            const {email,password,userType} = req.body
            try{
                if(userType !== "admin"){
                    return res.json({
                        status:400,
                        success:false,
                        message:"access denied not an admin user"
                    })
                }
                const admin = await User.findOne({email})
                if(!admin || admin.userType !== "admin"){
                    return res.json({
                        status:404,
                        success:false,
                        message:"invalid email or password"
                    })
                }
        
                const isMatch = await bcrypt.compare(password,admin.password)
                if(!isMatch){
                    return res.json({
                        status:404,
                        success:false,
                        message:"invalid email or password",
        
                    })
                }
        
                const token = jwt.sign(
                    {id:admin._id, email:admin.email, userType:admin.userType},
                    process.env.SECRET_KEY,
                    {expiresIn:"1h"}
                );
                return res.json({
                    status:200,
                    success:true,
                    token,
                    admin,
                    userType,
                    message:"login successfully"
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


        
        
        module.exports = {seedAdmin,adminLogin}
