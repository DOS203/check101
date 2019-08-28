const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = mongoose.Schema({
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
 
  // privilege:{
  //   type: String,
  //   required: false
  // },
  // id:{
  //   type: String,
  //   required: false
  // },
});

module.exports = mongoose.model('User', UserSchema);