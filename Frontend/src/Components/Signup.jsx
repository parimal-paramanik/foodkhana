import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/syles/Signup.css";

function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const signupFetch = () => {
    let payload = {
      name,
      email,
      password,
    };

    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.msg === "Registration successful") {
          alert(res.msg);
          navigate("../Login");
        } else {
          alert(res.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signupFetch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signupcss">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={nameChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={emailChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={passwordChange}
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default Signup;
