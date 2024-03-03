import React from "react";
import { Link } from "react-router-dom";
function Course(props) {
  return (
    <div className="cards">
      <div className="card">
        <div className="cardm">
          <div className="cardimg">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="cardtext">
            <h2>{props.name}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              incidunt.
            </p>
          </div>
        </div>
        <div className="price">
          {props.status === "Not Bought" ? (
            <>
              Price:Rs.{props.price}{" "}
              <Link to={`/courseenroll/${props.id}`} state={{ course: props }}>
                <button>Enroll</button>
              </Link>
            </>
          ) : (
            <>
              Continue....
              <Link to={`/mycourses`} state={{ course: props }}>
                <button style={{ marginLeft: "65px" }}>Enrolled</button>
              </Link>
            </>
          )}
          {/*  */}

          {/* <Link to= {isLogged ? `/courseenroll/id=${props.id}` : <Login />} state={{course:props}}>
            <button>Enroll</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
export default Course;
