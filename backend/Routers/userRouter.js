// Importing all the required dependencies
const { registerNewUser ,loginUser} = require("../controllers/usercontroller");
const UserRouter = require("express").Router();
const { UserModel } = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



UserRouter.post("/register",registerNewUser);
UserRouter.post("/login",loginUser);


module.exports={UserRouter}