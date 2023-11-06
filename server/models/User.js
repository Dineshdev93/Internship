const mongoose = require("mongoose");
const validator = require('validator')
const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trime: true,
  },
  lname: {
    type: String,
    required: true,
    trime: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Not valid Email");
      }
    },
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  datecreated: Date,
  dateupdated: Date,
});
module.exports = mongoose.model("users",UserSchema);