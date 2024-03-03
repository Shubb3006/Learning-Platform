import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register({ onRegister }) {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
  });
  let aname, value;
  function handleinputs(e) {
    aname = e.target.name;
    value = e.target.value;

    setUser({ ...user, [aname]: value });
  }

  const navigate = useNavigate();

  const dataTobackend = async (e) => {
    e.preventDefault();
    const { email, name, password, cpassword } = user;

    const res = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
        cpassword,
      }),
    });
    const json = await res.json();

    if (res.status === 400) {
      window.alert("Please Enter the appropriate data");
    } else if (res.status === 401) {
      window.alert("User Already Exists");
    } else if (res.status === 402) {
      window.alert("Passwords do not match");
    } else {
      window.alert("Register Successfull");
      localStorage.setItem("token", json.authtoken);
      console.log(localStorage.getItem("token"));
      // onRegister();
      navigate("/");
    }
  };

  return (
    <div className="form">
      <form method="POST" onSubmit={dataTobackend}>
        <p id="signup">Signup</p>
        <p id="label">Email Id</p>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleinputs}
          placeholder="Enter the Email Id"
        />
        <p id="label">Username</p>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleinputs}
          placeholder="Enter the username"
        />
        <p id="label">Password</p>
        <input
          type="password"
          name="password"
          ovalue={user.password}
          onChange={handleinputs}
          id="pass"
          placeholder="Enter your password"
        />

        <p id="label">Confirm Password</p>
        <input
          type="password"
          name="cpassword"
          value={user.cpassword}
          onChange={handleinputs}
          id="pass"
          placeholder="Enter password again"
        />
        <div className="reg">
          <Link to="/login">Login</Link>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
