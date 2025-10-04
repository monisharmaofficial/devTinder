const express = require('express')
const app = express()

app.use('/user',(req,res,next)=>{
    // next()
    console.log("User route 1 is being accessed")
    // res.send("Request Handler One for /user")
     next()
   
},
(req,res,next)=>{
    console.log("User route 2 is being accessed")
    next()
    // res.send("Request Handler Two for /user")
},
(req,res,next)=>{
    console.log("User route 3 is being accessed")
    res.send("Request Handler Three for /user")
    next()
},
(req,res,next)=>{
    console.log("User route 4 is being accessed")
    // res.send("Request Handler Four for /user")
    // next()
}
)
app.listen('5000',()=>{
    console.log("Server is running on port 5000")
})