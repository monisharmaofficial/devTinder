const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 4, maxlength: 10 },
  lastName: { type: String },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true, minlength: 6 },
  age: { type: Number, min: 18 },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    },
  },
 
  photooUrl: {
    type: String,
    default:
      "https://t3.ftcdn.net/jpg/04/98/91/96/360_F_498919631_Me4XD0pVj0tX109wnyH7FIo6FHTb5J0E.jpg",
  },
  about: {
    type: String,
    default: "This is all about the default user",
  },
  skills: [String],
},{timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
