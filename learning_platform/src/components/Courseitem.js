import React, { useContext } from "react";
import noteContext from "../context/Notecontext";

function Courseitem(props) {
  const context = useContext(noteContext);
  const { deleteCourse } = context;
  const { course } = props;
  return (
    <div className="cards">
      <div className="card">
        <div className="cardm">
          <div className="cardimg">
            <img src={course.img} alt={course.name} />
          </div>
          <div className="cardtext">
            <h2>{course.name}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              incidunt.
            </p>
            <p>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => deleteCourse(course._id)}
                style={{ marginLeft: "200px", cursor: "pointer" }}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courseitem;
