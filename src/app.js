const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body)

  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(500).send("Error while saving user data : " + err.message);
  }
  // const user = new User(
  //     {
  //         firstName: "Monika",
  //         lastName: "Sharma",
  //         emailId: "monika.sharma@example.com",
  //         password: "password123",
  //         age: 25,
  //         gender: "Female"
  //     }
  // )
  // try{
  // await user.save()
  // res.send("User added successfully")
  // }catch(err){
  //     res.status(500).send("Error while saving user data: " + err.message)
  // }
});

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("UserId is:", userId);

  try {
    const user = await User.findById(userId);

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(400).send("Invalid ID format or something went wrong");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    // console.log("User email is: ", userEmail)
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) {
      return res.status(404).send("User not found with this email");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }

  //   try {
  //     // console.log("User email is: ", userEmail)
  //     const user = await User.findOne({ emailId: userEmail });
  //     res.send(user);
  //   } catch (err) {
  //     res.status(500).send("User not found with this email: " + err.message);
  //   }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send("Error while fetching users data: " + err.message);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findOneAndDelete({_id:userId})
    const user = await User.findOneAndDelete(userId);
    if (user) {
      res.send("User deleted successfully");
    } else {
      res.send("User not found with this id");
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  const user = await User.findOneAndUpdate({ _id: userId }, data, {returnDocument:"after", runValidators:true});
  try {
    if(user){
    console.log(user);
    res.send("User Updated successfully");
    }else{
      res.send("User not found with this id")
    }

  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }
});

app.patch("/userByEmail",async(req,res)=>{
 const userEmail = req.body.emailId;
 const data = req.body;

 try{
  const user = await User.findOneAndUpdate({emailId:userEmail},data)
  res.send("User Updated Successfully")
 }catch(err){
  res.status(500).send("Something went wrong: " + err.message)
 }

})

connectDB()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(4000, () => {
      console.log("server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to database", err);
  });
