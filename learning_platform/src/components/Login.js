import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUserdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let aname, value;
  function handleinputs(e) {
    aname = e.target.name;
    value = e.target.value;
    setUserdata({ ...user, [aname]: value });
  }

  const dataTobackend = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await res.json();
    if (res.status === 400) {
      window.alert("Please Enter the appropriate data");
    } else if (res.status === 401) {
      window.alert("Invalid details");
    } else {
      window.alert("Login Successfull");
      localStorage.setItem("token", json.authtoken);
      console.log(localStorage.getItem("token"));
      navigate("/");
    }
  };
  return (
    <div className="form">
      <form onSubmit={dataTobackend} method="POST">
        <p id="login">Login</p>
        <p id="label">Email Id</p>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleinputs}
          placeholder="Enter your Email Id"
        />
        <p id="label">Password</p>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleinputs}
          id="pass"
          placeholder="Enter your password"
        />
        <a href="for.php" id="for">
          Forgot Password
        </a>
        <div className="reg">
          <Link to="/register">Sign Up</Link>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
