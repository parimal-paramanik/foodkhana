
const jwt = require("jsonwebtoken");
require("dotenv").config()
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "Not able to found token" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);
    req.body.userId =  decodedToken.userId 
    next();
  } catch (error) {
    res.status(500).send({ message: "Authentication failed" });
  }
};

module.exports = {
  auth
};