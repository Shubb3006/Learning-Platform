import React, { useState, useEffect, useContext } from "react";
import Contact from "./Contact";
import popCourseList from "./popCourseList";
import Course from "./Course";
import { Link } from "react-router-dom";
import noteContext from "../context/Notecontext";

function Home() {
  const context = useContext(noteContext);
  const { courses, getCourses } = context;
  const [courseIds, setCourseIds] = useState([]);
  useEffect(() => {
    getCourses();
    const array = [];
    for (let i = 0; i < courses.length; i++) {
      const element = courses[i];
      array.push(element.name);
    }
    setCourseIds(array);
  }, []);
  return (
    <div>
      <div className="main">
        <div className="main2">
          <div className="container">
            <h1>Welcome to online learning platform</h1>
            <p>Learn and implement</p>
            <button>
              <Link to="/register">Get started</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="add">
        <ul>
          <li>100 + online courses</li>
          <li>Expert Instructors</li>
          <li>Lifetime Access</li>
        </ul>
      </div>
      <h1 style={{ display: "block", margin: "25px", textAlign: "center" }}>
        Popular Courses
      </h1>
      <div className="popular">
        {popCourseList.map((popCourse) => {
          if (courseIds.includes(popCourse.name)) {
            popCourse.status = "Bought";
          } else {
            popCourse.status = "Not Bought";
          }
          return (
            <Course
              key={popCourse.id}
              id={popCourse.id}
              img={popCourse.img}
              price={popCourse.price}
              lang={popCourse.lang}
              name={popCourse.name}
              status={popCourse.status}
            />
          );
        })}
      </div>
      <div className="button" style={{ display: "flex", justifyContent: "center" }}>
        <a href="courses.html">
          <Link to="/Courses">
            <button id="btn">View all Courses</button>
          </Link>
        </a>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
