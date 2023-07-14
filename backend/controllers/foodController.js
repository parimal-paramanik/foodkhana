const express = require("express")
const { ProductModel } = require("../Models/foodmodel");
const { UserModel } = require("../Models/userModel");


const newFood = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const newFood = new ProductModel({
            name,
            description,
            price,
            image
        });
        console.log(newFood)
        const savedFood = await newFood.save();

        res.status(201).json(savedFood);
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
}

const getAllFood= async(req,res)=>{
try {
    const allFood= await ProductModel.find()
    res.send(allFood)
} catch (error) {
    res.status(500).json({ error:error.message });
}

}

const addToCart = async (req, res) => {
    const { name, description, price, image, userId } = req.body;
    // console.log(req.body)
    try {
    //   if (!name || !description || !price || !image) {
    //     return res.status(400).send({ msg: "Provide all the details" });
    //   }
      
  
      const user = await UserModel.findOne({ _id: userId });
  
      user.cart.push(req.body);
  
      await user.save();
  
      return res.status(201).send({ msg: "Product added to cart" });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
    console.log(req.body)
  };
  


const removeFromCart = async(req,res)=>{

    const id = req.params.id;
    const {userId} = req.body

    try {
       const user = await UserModel.findOne({_id:userId}); 

       const index = user.cart.findIndex(item=>item._id.toString() === id);
 
        if(index !== -1){
            user.cart.splice(index,1)
            await user.save(); 
            res.status(200).send({msg:"product is removed from the cart"})
        }else{
            res.status(400).send({msg:"product could not found in the cart"})
        }

      

    } catch (error) {
        res.status(500).send({msg:"internal server error"})
    } 
}
const getCart= async(req,res)=>{
    const {userId}= req.body
    try {
        const user= await UserModel.findOne({_id:userId})
        console.log(user.cart)
        res.send({data:user.cart})
        
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
    
    }
module.exports={newFood,getAllFood,addToCart,removeFromCart,getCart}