const express = require('express')
const connectDB = require('./config/database')
const User = require('./models/user')
const app = express()

app.post("/signup", async (req, res) => {
    const user = new User(
        {
            firstName: "Monika",
            lastName: "Sharma",
            emailId: "monika.sharma@example.com",
            password: "password123",
            age: 25,
            gender: "Female"
        }
    )
    try{
    await user.save()
    res.send("User added successfully")
    }catch(err){
        res.status(500).send("Error while saving user data: " + err.message)
    }

})


connectDB().then(()=>{
    console.log("Database Connected Successfully")
    app.listen(4000,()=>{
    console.log("server is running on port 4000")
})
}).catch((err)=>{
    console.log("Error while connecting to database", err)
})

