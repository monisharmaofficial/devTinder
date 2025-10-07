const mongoose = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://monika:zHF2lEnV9HQNSJgV@learnnamastenode.oaadhcd.mongodb.net/devTinder"
    )
};

module.exports = connectDB;

