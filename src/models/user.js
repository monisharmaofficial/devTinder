const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 4, maxlength: 10 },
  lastName: { type: String },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is not valid : " + value);
      }
    }
  },
  password: { type: String, required: true, minlength: 6,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Password is not strong enough : " + value);
      }
    }
  },
  age: { type: Number, min: 18 },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    },
  },
 
  photoUrl: {
    type: String,
    default:
      "https://t3.ftcdn.net/jpg/04/98/91/96/360_F_498919631_Me4XD0pVj0tX109wnyH7FIo6FHTb5J0E.jpg",
      validate(value){
        if(!validator.isURL(value)){
          throw new Error("Photo url is not valid : " + value);
        }
      }
  },
  about: {
    type: String,
    default: "This is all about the default user",
  },
  skills: [String],
},{timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
