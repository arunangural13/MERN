const express = require("express")
const routes = express.Router()

const upload = require("../middleware/multer")

const {adminLogin} = require("../config/seed")
const { createUser, getAllUser, deletedUser, getUserById, loginUser, updatedUser } = require("../api/user/userController")
const { addAppointment, getAllAppointment, getAppointmentById, updatedAppointmentById, deleteAppointmentById } = require("../api/donor/donorController")
const { addFund, getFundById, getAllFund, updatefFundById, deleteFund } = require("../api/fundraising/fundcontroller")
const { createMember, getallMember, getMemberById, updateMemberById, deleteMemberById } = require("../api/member/memberController")
const { addStaff, getAllStaff, getStaffById, getUpdateStaffById, deleteStaff } = require("../api/staff/staffController")
const { addMemberType, getAllMemberTypes, getMemberTypeById, updateMemberTypeById, deleteMemberTypeById } = require("../api/membertype/membertypeController")

// ADMIN ROUTES
routes.post("/adminlogin",adminLogin)

// USER ROUTES
routes.post("/createuser",createUser)
routes.post("/loginuser",loginUser)
routes.post("/getuserbyid",getUserById)
routes.post("/getalluser",getAllUser)
routes.post("/deleteuser",deletedUser)
routes.post("/updateuser",updatedUser)

// DONOR ROUTES || APPOINTMENT ROUTES
routes.post("/addappointment",addAppointment)
routes.post("/getallappointment",getAllAppointment)
routes.post("/getappointmentbyid",getAppointmentById)
routes.post("/updateappointmentbyid",updatedAppointmentById)
routes.post("/deleteappointmentbyid",deleteAppointmentById)

// FUNDRAISER ROUTES
routes.post("/addfund",addFund)
routes.post("/getallfund",getAllFund)
routes.post("/getfundbyid",getFundById)
routes.post("/updatefundbyid",updatefFundById)
routes.post("/deletefund",deleteFund)

// MEMBER ROUTES
routes.post("/createmember",upload.fields([
    {name:"image",maxCount:5},
    {name:"addressProof",maxCount:5},
    {name:"idProof",maxCount:5}
]),createMember)
routes.post("/getallmember",getallMember)
routes.post("/getmemberbyid",getMemberById)
routes.post("/updatememberbyid",updateMemberById)
routes.post("/deletememberbyid",deleteMemberById)

// STAFF ROUTES
routes.post("/addstaff",addStaff)
routes.post("/getallstaff",getAllStaff)
routes.post("/getstaffbyid",getStaffById)
routes.post("/getupdatestaffbyid",getUpdateStaffById)
routes.post("/deletestaff",deleteStaff)

// MEMBER TYPE ROUTES
routes.post("/addmembertype",addMemberType)
routes.post("/getallmembertype",getAllMemberTypes)
routes.post("/getmembertypebyid",getMemberTypeById)
routes.post("/updatemembertypebyid",updateMemberTypeById)
routes.post("/deletemembertypebyid",deleteMemberTypeById)





module.exports = routes