const express = require('express')
const app = express()
const {adminAuth, userAuth} = require('./middleware/auth')

app.use('/admin',adminAuth)
// app.use('/user',userAuth)

//global middleware for error handling 
app.use("/",(err,req,res,next)=>{
    console.log("Error handling middleware")
    if(err){
 res.status(500).send("Something went wrong, please try again later")
    }
   
})

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

//we can also chain multiple routes like this
app.use("/product", (req,res,next)=>{
    console.log("Product route 1 is being accessed")
    next()
})

app.use("/product", (req,res,next)=>{
    console.log("Product route 2 is being accessed")
    res.send("Response from product route")
})

//we dont need to authrize user here while he's loging
app.get("/am/login",userAuth,(req,res)=>{
    res.send("User route is being accessed")
})


//other way to use middleware on specific route
app.get("/am/data",userAuth,(req,res)=>{
    res.send("User route is being accessed")
})



app.get("/admin/getData",(req,res)=>{
    // const token = "xy"
    // const isAuthrized = token === "xyz"
    // if(isAuthrized){
    //     res.send(
    //         "Get all the data to admin"
    //     )
    // }else{
    //     res.status(500).send("You are not authried to get data")
    // }
    res.send("Get all the data to admin")
})

app.delete("/admin/getData",(req,res)=>{
    // const token = "xyz"
    // const isAuthrized = token === "xyz"
    // if(isAuthrized){
    //     res.send(
    //         "dlt all the data to admin"
    //     )
    // }else{
    //     res.status(500).send("You are not authried to dlt")
    // }
    res.send("dlt all the data to admin")
})



app.listen('5000',()=>{
    console.log("Server is running on port 5000")
})