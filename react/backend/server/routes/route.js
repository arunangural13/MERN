const express = require("express")
const router = express.Router()
const {seedAdmin,adminLogin} = require ("../config/seed")

const {addUser,getuser,getUserById,singleuser,updateUser, deleteUser,} = require("../api/user/userController")


router.post("/adduser",addUser)
router.post('/allusers',getuser)
router.post('/getuserbyid',getUserById)
router.post("/singleuser",singleuser)
router.post("/update",updateUser)
router.post("/deleteuser",deleteUser)

router.post("/loginadmin", adminLogin);
router.post("/seedadmin", seedAdmin);

module.exports = router