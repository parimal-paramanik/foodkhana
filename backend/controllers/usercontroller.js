const express = require("express")
const {UserModel} = require("../Models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// signup of a user
const registerNewUser = async (req, res) => {
    try {
      const { email, password,name } = req.body;
      const isUserPresent = await UserModel.findOne({ email });
  
      // all fields presence check
      if (!email || !password || !name) {
        return res.status(400).send({ msg: "All feilds are required" });
      }
  
      // User already present in database.
      if (isUserPresent) {
        return res
          .status(400)
          .send({ msg: "Email already taken, try another email or login" });
      }
  
          // Hash the password.
      const hashedPassword = bcrypt.hashSync(password, 5);
      const newUser = new UserModel({ ...req.body, password: hashedPassword });
      await newUser.save();
      res.status(200).send({ msg: "Registration successful", user: newUser });
    } catch (error) {
      res.status(500).send({ error: "Registration failed", msg: error.message });
    }
  };

// login of  a user
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const isUserPresent = await UserModel.findOne({ email });
  
      // User not present in the database.
      if (!isUserPresent)
        return res
          .status(400)
          .send({ msg: "Not a existing user, please register" });
  
      // Password verification
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        isUserPresent.password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).send({ msg: "Wrong credentials" });
  
      // Generating access token
      const accessToken = jwt.sign(
        { userId: isUserPresent._id },
        process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "24hr" }
      );
  
      // Generating refresh token
      const refreshToken = jwt.sign(
        { userId: isUserPresent._id },
        process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
        { expiresIn: "4d"}
      );
  
      // Storing tokens in cookies.
      res.cookie("JAA_access_token", accessToken);
      res.cookie("JAA_refresh_token", refreshToken);
  
      res.status(200).send({ msg: "Login success", accessToken, refreshToken, user: isUserPresent});
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  };

 
  

module.exports = {registerNewUser,loginUser}