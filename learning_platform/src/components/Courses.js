import React, { useContext, useState, useEffect } from "react";
import Course from "./Course";
import CourseList from "./CourseList";
import noteContext from "../context/Notecontext";

function Courses() {
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
      <h1 style={{ display: "block", margin: "25px", textAlign: "center" }}>
        All Courses
      </h1>
      <div className="popular">
        {CourseList.map((course) => {
          if (courseIds.includes(course.name)) {
            course.status = "Bought";
          } else {
            course.status = "Not Bought";
          }
          return (
            <Course
              key={course.id}
              img={course.img}
              id={course.id}
              price={course.price}
              lang={course.lang}
              name={course.name}
              status={course.status}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Courses;
