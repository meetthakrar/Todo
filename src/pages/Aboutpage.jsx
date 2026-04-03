import React, { useContext } from 'react';
import { Navbar } from '../components/Navbar';
import Mycontext from '../context/Mycontext';
import "../pages/Aboutpage.css";

function Aboutpage() {

  const { mode } = useContext(Mycontext); // optional (for styling)

  return (
    <div className={mode}>
      
      <Navbar />

      {/* ✅ Context applied ONLY here */}
      <p
        className='About-todo'
        style={{
          color: mode === "dark" ? "#fff" : "#222",
          transition: "0.3s"
        }}
      >
        About ToDo
      </p>

      <div className="line"></div>

     <div className="para">
  <p
    style={{
      color: mode === "dark" ? "#ddd" : "#333",
      transition: "0.3s ease",
      lineHeight: "1.6"
      //color:mode === "dark"? "#ddd" :  "#333",
    }}
  >
    A to-do list is a list of items that{" "}
    <span
      className="red"
      style={{ color: mode === "dark" ? "#ff6b6b" : "red" }}
    >
      need to be completed
    </span>.
    The items on the list can range from simple activities like replying to an email,
    to more complex tasks like creating project briefs.
  </p>
</div>

<div className="para2">
  <p
    style={{
      color: mode === "dark" ? "#ddd" : "#333",
      transition: "0.3s ease",
      lineHeight: "1.6"
    }}
  >
    The items on a to-do list are usually{" "}
    <span
      style={{
        color: mode === "dark" ? "#4dabf7" : "#007bff",
        fontWeight: "600"
      }}
    >
      action-oriented
    </span>, such as
    “Schedule a meet with the R&D team” or “Call back customer X.”
    Some lists include more abstract goals, such as
    “improve your time management skills” or
    “learn how to use a new software program.”
  </p>
</div>
    </div>
  );
}

export default Aboutpage;