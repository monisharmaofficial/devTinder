const express = require('express')
const app = express()

// app.use('/',(req,res,next)=>{
//     res.send('Hello from the server!')
// })

// app.get('/',(req,res)=>{
//     res.send('Hello from the server using GET method!')
// })

// quesry parameter
app.get('/user',(req,res)=>{
    // res.send('Hello User from the server using GET method!')
    console.log(req.query)
     res.send({FirstName:"Monika",LastName:"Sharma"})
})

// route parameter
app.get('/user/:id/:name/:age',(req,res)=>{
    console.log(req.params)
    res.send({FirstName:"Monika",LastName:"Sharma"})
    //  res.send({FirstName:req.params.name,LastName:"Sharma",Age:req.params.age})
})

app.post('/user',(req,res)=>{
    res.send("Data Successfully saved to the server using POST method!")
})

// app.use('/Hello/1',(req,res)=>{
//     res.send("Hello 1 From Home")
// })

// app.use('/monika',(req,res,next)=>{
//     res.send("Hello Monika from the server")
// })

// app.use('/aman',(req,res)=>{
//     res.send("Hello Aman this server is for you by Monika")
// })

app.listen(7777,()=>{
    console.log('Server is running on Port 7777')
})