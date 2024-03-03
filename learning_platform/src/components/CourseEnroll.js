import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/Notecontext";

function CourseEnroll() {
  const location = useLocation();
  const navigate = useNavigate();
  const Notecontext = useContext(noteContext);
  const { addCourse } = Notecontext;
  const [mouseover, setmouseover] = useState(false);
  function mouseoverbutton() {
    setmouseover(true);
  }
  function mouseoutbutton() {
    setmouseover(false);
  }
  async function clicked() {
    if (!localStorage.getItem("token")) {
      // If user is not logged in, navigate to login page
      navigate("/login");
    } else {
      addCourse(course.id, course.name, course.price, course.lang, course.img);
    }
  }

  const course = location.state ? location.state.course : null;
  //   const { id } = useParams();
  //   const courseId = parseInt(id, 10);
  //   const course = CourseList.find((course) => course.id === courseId);
  return (
    <div className="data">
      <div className="img">
        <img src={course.img} alt="" />
      </div>
      <div className="info">
        <h1 name="name">{course.name}</h1>
        <div className="language">
          <h2>Language :</h2>
          <p>{course.lang}</p>
        </div>
        <div className="language">
          <h2>Instructors : </h2>
          <p> Our best teachers</p>
        </div>
        <span id="price">&#8377;</span>
        <span id="price">{course.price}</span>
        <div className="button">
          <button
            style={
              mouseover
                ? {
                    width: "120px",
                    margin: "32px 20px",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    backgroundColor: "orange",
                    color: "white",
                    transition: "0.5s",
                  }
                : {
                    margin: "32px 20px",
                    width: "120px",
                    padding: "12px",
                    fontSize: "20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }
            }
            onMouseOver={mouseoverbutton}
            onMouseOut={mouseoutbutton}
            onClick={clicked}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseEnroll;
