const express = require ('express')
const app = express()
const {seedAdmin} = require("./server/config/seed")
require("dotenv").config()
const port = process.env.PORT  || 3004
const db = require("./server/config/db")
const router = require("./server/routes/route")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
seedAdmin()


db()
app.use("/api",router)


app.listen(port,()=>{
    console.log(`server is running at port number http://localhost:${port}`)
})




