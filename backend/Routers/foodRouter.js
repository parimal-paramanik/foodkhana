const {newFood,getAllFood,removeFromCart,addToCart,getCart} = require("../controllers/foodController");
const FoodRouter = require("express").Router();
const { ProductModel } = require("../Models/foodmodel");
const {auth}= require("../Middleware/middleware")


FoodRouter.post("/addfood",auth,newFood);
FoodRouter.get("/fetchFood",getAllFood);
FoodRouter.delete("/cart/:id",auth,removeFromCart);
// add to cart


FoodRouter.patch("/cart",auth,addToCart);
FoodRouter.get("/cart",auth,getCart);





module.exports={FoodRouter}