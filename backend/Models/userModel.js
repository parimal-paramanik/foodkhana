const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    cart:[{
     name:{type: String},
     description:{type: String},
     price:{type: Number},
     image:{type: String},
     quantity:{
      type:Number,
      default:1
     }
    }]
  },
  
  { versionKey: false }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel};
