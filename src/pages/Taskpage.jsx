import React, { useEffect, useState, useContext } from 'react';
import { Navbar } from '../components/Navbar';
import Mycontext from '../context/Mycontext';
import "../pages/Taskpage.css";

export const Taskpage = () => {

  const [apiData, setApiData] = useState([]);
  const { mode } = useContext(Mycontext);

  const FetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setApiData(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div style={{
      background: mode === "dark" ? "#121212" : "#ffffff",
      minHeight: "100vh",
      transition: "0.3s"
    }}>
      <Navbar />

      <div className='flex-box'>

        {/* ✅ Context ONLY here */}
        <h2
          className='text'
          style={{
            color: mode === "dark" ? "#fff" : "#222",
            transition: "0.3s"
          }}
        >
          List of Todos ({apiData.length})
        </h2>

        <div className="line"></div>

        {apiData.map((item) => (
          <div className="white" key={item.id}>
            <p className="white-text">{item.todo}</p>

            <button className={item.completed ? "yellow" : ""}>
              {item.completed ? "Completed" : "Pending"}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};