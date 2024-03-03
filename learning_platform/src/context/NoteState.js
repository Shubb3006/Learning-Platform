import noteContext from "./Notecontext";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function NoteState(props) {
  const host = "http://localhost:5000";
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const addCourse = async (id, name, price, lang, img) => {
    
    const response = await fetch(`${host}/api/course/createcourse/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ id, name, price, lang, img }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 400) {
      window.alert("You have already bought this Course");
    }
    else {
      window.alert("You have bought this Course Successfully");
    }
    // window.location.assign("/mycourses");
    navigate("/mycourses")
  };

  const getCourses = async () => {
    const response = await fetch(`${host}/api/course/fetchallcourses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      // body: JSON.stringify({}),
    });
    const json = await response.json();
    // console.log(json);
    setCourses(json);
  };

  const deleteCourse = async (id) => {
    const response = await fetch(`${host}/api/course/deletecourse/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ id }),
    });
    console.log("Deleting course with id " + id);
    const newCourse = courses.filter((course) => {
      return course._id !== id;
    });
    setCourses(newCourse);
  };

  const callback=async(username,phone,email,course,comments)=>{
    const response = await fetch(`${host}/api/contact/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,phone,email,course,comments}),
    });
    await response.json();
    if(response.status===400){
      window.alert("Please Enter Appropriate details");
    }
  };
  return (
    <noteContext.Provider
      value={{ courses, setCourses, addCourse, getCourses, deleteCourse,callback }}
    >
      {props.children}
    </noteContext.Provider>
  );
}

export default NoteState;
