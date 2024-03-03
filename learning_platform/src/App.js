import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CourseEnroll from "./components/CourseEnroll";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Courses from "./components/Courses";
import Register from "./components/Register";
import Contact from "./components/Contact";
import NoteState from "./context/NoteState";
import MyCourse from "./components/MyCourses";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NoteState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path={`/courseenroll/:id`} element={<CourseEnroll />} />
            <Route path="/mycourses" element={<MyCourse />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
        </NoteState>
      </BrowserRouter>
    </div>
  );
}

export default App;
