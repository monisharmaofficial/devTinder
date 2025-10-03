const express = require('express')
const app = express()

app.use('/',(req,res,next)=>{
    res.send('Hello from the server!')
    next()
})

app.use('/monika',(req,res,next)=>{
    res.send("Hello Monika from the server")
    next()
})

app.use('/aman',(req,res)=>{
    res.send("Hello Aman this server is for you by Monika")
})

app.listen(7777,()=>{
    console.log('Server is running on Port 7777')
})