import React, { useContext, useState } from "react";
import noteContext from "../context/Notecontext";

function Contact() {
  const context = useContext(noteContext);
  const { callback } = context;

  const [contact, setcontactdata] = useState({
    username: "",
    email: "",
    phone: "",
    course: "",
    comments: "",
  });

  // const [username, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [phone, setphone] = useState("");
  // const [course, setcourse] = useState("");
  // const [comments, setcomment] = useState("");

  // function changename(e) {
  //   setname(e.target.value);
  // }
  // function changephone(e) {
  //   setphone(e.target.value);
  // }
  // function changeemail(e) {
  //   setemail(e.target.value);
  // }
  // function changecourse(e) {
  //   setcourse(e.target.value);
  // }
  // function changecomments(e) {
  //   setcomment(e.target.value);
  // }

  // let aname, value;
  // function handleinputs(e) {
  //   aname = e.target.name;
  //   value = e.target.value;
  //   setcontactdata({ ...contact, [aname]: value });
  // }
  function handleinputs(e) {
    setcontactdata({ ...contact, [e.target.name]: e.target.value });
  }

  // let aname, value;
  // function handleinputs(e) {
  //   aname = e.target.name;
  //   value = e.target.value;
  //   setcontactdata({ ...contact, [aname]: value });
  // }

  function submit(e) {
    e.preventDefault();
    callback(
      contact.username,
      contact.phone,
      contact.email,
      contact.course,
      contact.comments
    );
    window.alert(`Hi ${contact.username} You will get a callback very soon`);
    setcontactdata({
      username: "",
      email: "",
      phone: "",
      course: "",
      comments: "",
    });
  }
  return (
    <div className="callback">
      <h1>Arrange a call back</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          id="name"
          onChange={handleinputs}
          placeholder="Enter Your Name"
          value={contact.username}
          required
        />
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={handleinputs}
          placeholder="Enter Your Mobile No."
          value={contact.phone}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleinputs}
          value={contact.email}
          placeholder="Enter Your Email Id"
          required
        />
        <input
          type="text"
          name="course"
          id="course"
          onChange={handleinputs}
          value={contact.course}
          placeholder="Enter The Course Interested in"
          required
        />
        <input
          type="text"
          name="comments"
          id="comments"
          onChange={handleinputs}
          value={contact.comments}
          placeholder="Enter Your Comments"
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <h2 style={{ margin: "10px 20px" }}>Or Contact us at</h2>
      <div className="logo">
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <img src="img/linkedin.png" alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="img/instagram.png" alt="" />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <img src="img/twitter.png" alt="" />
        </a>
        <a href="https://wa.me/" target="_blank">
          <img src="img/whatsapp.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
