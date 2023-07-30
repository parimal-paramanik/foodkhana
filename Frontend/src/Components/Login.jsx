import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "../Components/syles/Login.css";


function Login({isAuth,change}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const  navigate= useNavigate()

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function loginFetch() {
    const payload = {
      email,
      password,
    };

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.msg === "Login success"){
          // document.cookie = data.accessToken
          localStorage.setItem("authorization", data.accessToken)
          alert("login successfull")

          change(true)
          
          navigate("../Product")
          
        }
        else{
          alert(data.msg)
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginFetch();
  }

  return (
    <div>
      <form className="login-form " onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
