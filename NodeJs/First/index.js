const express= require('express')
const app= express()
app.use(express.json());
require('./Config/Mongodb.js')
 
// console.log(app)
// app.method('route','function')

 app.get('/',(req,res)=>{
    res.send('<h2>Hello api</h2>')
 })

 app.get('/Home',(req,res)=>{
    res.json({
        'status':200,
        'success':true,
        'message':'hello hy'
    })
 })
 
 app.get('/sum',(req,res)=>{
     let a=parseInt(req.query.num1)
     let b=parseInt(req.query.num2)
     let c= a+b
     res.json({
         'status':200,
         'success':true,
         'message':c
        })
    })

    app.get('/myhero',(req,res)=>{
        let a=parseInt(req.query.a) 
        // let b=req.query.heroname
        const heroname = 'arun'
        if (a==0){
            res.send('i have no hero for today, see you tomorrow')
        }
        else {
            let b="";
            for(let i = 0;i<a;i++){
                b +=heroname+ '\n';
            }
            res.send(b)
        }
    })
    
    app.get('/*',(req,res)=>{
       res.send('404 page is not found')
    })

    app.post('/',(req,res)=>{
        console.log(req.body)
        res.send(req.body)
    })



 app.listen(3000,()=>{
    console.log("app is running on port no",3000)
 })
