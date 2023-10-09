import React, { useState } from 'react';
import "../Components/syles/address.css";

const formData= {
    name :"",
    address: "",
    city : "",
    postalCode: ""
}

const Addressform = () => {
  const [addressdetails, setAddressdetails]= useState(formData)

  const fieldChanged = (e)=>{
     setAddressdetails({...addressdetails ,[e.target.name]: e.target.value })
  }

  return (
    <div className='address-form-container'>
      <div className='address-form'>
        <h2>Enter Your Address:</h2>
        <div className="form-group">

          <input
            type="text"
            placeholder="Enter Your Name"
            name='Name' 
            // value={name}
            onChange={(e) => fieldChanged(e)}
          />
        </div>
        <div className="form-group">  
          <input
            type="text"
            placeholder=" Enter Your Address"
            // value={name}
            name='Address' 
            onChange={(e) => fieldChanged(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder=" Enter Your City Name"
            // value={name}
            name='City' 
            onChange={(e) => fieldChanged(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder=" Enter your Postal Code"
            // value={name}
            name='Postal Code' 
            onChange={(e) => fieldChanged(e)}
          />
        </div>
        <button>Complete Payment</button>
      </div>
    </div>
  );
}

export default Addressform;
