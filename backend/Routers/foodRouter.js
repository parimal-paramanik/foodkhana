const {newFood,getAllFood,removeFromCart,addToCart,getCart,sortprice ,serachItems
,updateQuantity} = require("../controllers/foodController");
const FoodRouter = require("express").Router();
const { ProductModel } = require("../Models/foodmodel");
const {auth}= require("../Middleware/middleware")


FoodRouter.post("/addfood",auth,newFood);
FoodRouter.get("/fetchFood",getAllFood);

FoodRouter.delete("/cart/:id",auth,removeFromCart);

// add to cart
FoodRouter.patch("/cart",auth,addToCart);

FoodRouter.get("/cart",auth,getCart);
// search and sort functioality
FoodRouter.get("/sort",auth, sortprice)
FoodRouter.get("/find",auth,serachItems)

// quantity update
FoodRouter.patch("/cart/:foodId",auth,updateQuantity)






module.exports={FoodRouter}