
import React, { useState, useEffect } from 'react';
import "../Components/syles/cart.css";
let authorization = localStorage.getItem("authorization")


const Cart = () => {
  const [foods, setFoods] = useState([]);
  const [quantity,setQuantity]=useState(1)
  const [price,setPrice]=useState(0)

  useEffect(() => {
    fetchFoods();
  },[quantity]);

  const fetchFoods = () => {
    fetch('http://localhost:8080/food/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
        let totalPrice= data.data.reduce((acc,item)=>{
          acc = acc + item.price*item.quantity
              return acc
        },0)
        setPrice(totalPrice)
      })
      .catch((error)=>{
        console.log(error)
      })
  };

//==============================================deleteItem 
 async function deleteItem(productId){
  fetch(`http://localhost:8080/food/cart/${productId}`,{
     method:"DELETE",
     headers:{
      "content-type":"application/json",
      Authorization:authorization
     }
  }).then((res)=> res.json())
  .then((data)=>{
    if(data.msg === "product is removed from the cart"){
      alert("Food removed from cart")
      fetchFoods()
    }
  }).catch((error)=>{
    console.log(error)
  })
 
}

 //========================================update quantity

 async function updateQuantity(foodId, quantity) {
  // console.log(authorization)
  fetch(`http://localhost:8080/food/cart/${foodId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify({ quantity: quantity }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      if (data.msg === "quantity updated") {
        setQuantity(quantity); 
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


  return(
      <div  className="product-page">
    <button style={{backgroundColor:"green",color:"white"}}>Pay Now</button>
      <h1> Total money to be paid : ${price} </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4 ,1fr)', textAlign: 'center', gap: '15px' }}>
        {foods?.data?.map((food,index) => (
          <div key={index}
          style={{
            padding: "10px",
            boxSizing: "border-box",
            transition: "box-shadow 0.3s ease-in-out", 
            boxShadow: "0 0 5px red", 
            borderRadius: "8px", 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 10px blue"; 
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)"; 
            e.currentTarget.style.transform = "scale(1)"
          }}
          >
            <img src={food.image} alt="img" style={{ width: '300px', height: '250px' }} />
            <h3>{food.name}</h3>
            <p>Price: $ {food.price}</p>
            <p>QNTY: {food.quantity}</p>
            <button onClick={()=>{updateQuantity( food._id,food.quantity - 1 )}} disabled= {food.quantity===1}>-</button>
             <button onClick={()=>{updateQuantity(food._id,food.quantity +1)}} disabled= {food.quantity===10}>+</button>
             <button style={{backgroundColor:"red",color:"white"}} onClick={()=>{deleteItem(food._id)}}>Remove</button>  
          </div>
        ))}
      </div>
    </div>
  )
  
};

export default Cart;
