import React, { useState, useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import "../Components/syles/Product.css";
let authorization = localStorage.getItem("authorization")

// console.log(authorization)

function Product() {
  const [foods, setFoods] = useState([]);

  const [serachProduct,setSerachProduct]= useState("")
  const  navigate= useNavigate()
  useEffect(() => {
    fetchFoods();
    // console.log("rendering")
  }, []);


  const fetchFoods = () => {
    fetch(`http://localhost:8080/food/fetchFood`)
      .then(response => response.json())
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // add the item into the cart ==========================================
    function addToCart(food){
      // console.log({msg:document.cookie})
      console.log(food)
     fetch(`http://localhost:8080/food/cart` ,{

        method:"PATCH",
        headers:{
          'Content-Type': 'application/json',
          Authorization: authorization,
        },
        body:JSON.stringify(food)
      }).then((data)=>{
        return data.json()
      }).then((res)=>{
         console.log(res)   
         if(res.msg === "Product added to cart"){
          alert("product added to cart")
          navigate("../Cart")
         }
         else if(res.msg === "Product already in cart"){
             alert("Product already in cart")
         }
         
      }).catch((error)=>{
        console.log(error)
      })
    }

    // sort by price ====================================================
    function sortpriceASCDESC(method){
    fetch(`http://localhost:8080/food/sort?sort=${method}`,{
      method:"GET",
      headers:{
        "content-type":"application/json",
        authorization:authorization
      }
    })
    .then((res)=> res.json())
    .then((data)=> setFoods(data))
    }

    // ====================================serach by title  ===============

 function handleSearch(e){
   setSerachProduct(e.target.value)
   
  //  fetch(`http://localhost:8080/food/find?search=${serachProduct}`,{
  //   method:"GET",
  //   headers:{
  //     "content-type":"application/json",
  //     Authorization: authorization,
  //   }
  // }).then((res)=> res.json()).then((data)=> 
  //  setFoods(data)
  // )
 }

 function handleClickSearch(){
    fetch(`http://localhost:8080/food/find?search=${serachProduct}`,{
      method:"GET",
      headers:{
        "content-type":"application/json",
        Authorization: authorization,
      }
    }).then((res)=> res.json()).then((data)=> 
     setFoods(data)
    )
 }

  return (
    
    <div style={{textAlign:"center" , marginTop:"55px"}} className='product-page'> 
    <input className='input-Box' type='text' value={serachProduct} onChange={handleSearch} placeholder='     Search products'></input>
    <button onClick={handleClickSearch} >search</button>

      <button className='sortbtn' onClick={() => sortpriceASCDESC('asc')}>low to high</button> 
      <button className='sortbtn' onClick={() => sortpriceASCDESC('desc')}>high to low</button>

 <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    textAlign: "center",
    gap: "10px",
    
    
  }}
>
  {foods.map(food => (
    <div
      key={food.id}
      style={{
        padding: "10px",
        boxSizing: "border-box",
        transition: "box-shadow 0.3s ease-in-out", 
        boxShadow: "0 0 5px black", 
        borderRadius: "3px", 
        width:"330px",
        height:"400px",
        margin:"auto"
        
      }}
      onMouseEnter={(e) => {
        // e.currentTarget.style.boxShadow = "0 0 20px  blue"; 
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        // e.currentTarget.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)"; 
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <img src={food.image} alt='img' style={{ width:"100%", height: "200px" }} />
      <h3>{food.name}</h3>
      {/* <p>{food.description}</p> */}
      <p>Price: $ {food.price}</p>
      <button onClick={() => { addToCart(food) }}>order now</button>
    </div>
  ))}
</div>

    </div>
  );
}

export default Product;


