import React, { useContext, useEffect } from "react";
import noteContext from "../context/Notecontext";
import Courseitem from "./Courseitem";
function MyCourse() {
  const context = useContext(noteContext);
  const { courses, getCourses } = context;
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      <h1 style={{ display: "block", margin: "25px", textAlign: "center" }}>
        My Courses
      </h1>
      <div className="popular">
        {courses.length === 0 &&
          "You Don't have any course Buy It in All Courses Section"}
        {courses.map((course) => {
          return <Courseitem key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
}
export default MyCourse;
