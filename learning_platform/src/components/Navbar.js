import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  function onLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="main2">
      <nav className="navbar1">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          {/* <li><Link to="/login">Login</Link></li> */}
          {/* <li style={{display: isLogged ?"none" : "inline"}}><Link to="/login">Login</Link></li> */}
          {/* <li><Link to="/register">Register</Link></li> */}
          {localStorage.getItem("token") ? (
            <li>
              <Link to="/mycourses">My Courses</Link>
            </li>
          ) : (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li style={{display: isLogged ?"inline" : "none"}}><Link to="/logout">Logout</Link></li> */}
          {localStorage.getItem("token") ? (
            <li onClick={onLogout} className="log">
              {" "}
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
