
const express= require("express")
const app= express()
app.use(express.json())
require("dotenv").config()
const cors = require("cors")
const {connection}= require("./config/db")
const {UserRouter}= require("./Routers/userRouter")
const {FoodRouter}= require("./Routers/foodRouter")

// const {auth}= require("./Middleware/middleware")
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")

app.use(cors());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // set to true if using HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("welcome to the hotel")
})

app.use("/user",UserRouter)
app.use("/food",FoodRouter)


app.listen(process.env.port,async(req,res)=>{
    try {
        await connection 
        console.log("connected to mognodb")
    } catch (error) {
        console.log({msg:error.message})
    }
    console.log(`server is running at port ${process.env.port}`)
})
