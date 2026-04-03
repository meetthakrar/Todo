import React, { useEffect, useState, useContext } from "react";
import "../components/MyTodos.css";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import Mycontext from "../context/Mycontext";

const Mytodos = () => {

  const { mode } = useContext(Mycontext); // ✅ context added

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('students')) || []
  );

  const [todonote, setTodonote] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTodonote(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todonote.trim()) {
      setErrorMsg("Task is required!");
      return;
    }

    if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, text: todonote } : item
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todonote,
        completed: false // ✅ new feature
      };
      setTodos([...todos, newTodo]);
    }

    setTodonote("");
    setErrorMsg("");
  };

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(todos));
  }, [todos]);

  const deleteHandler = (id) => {
    const deleteData = todos.filter((item) => item.id !== id);
    setTodos(deleteData);
  };

  const editHandler = (id) => {
    const editData = todos.find((item) => item.id === id);
    setTodonote(editData.text);
    setEditId(id);
  };

  // ✅ Toggle Complete
  const toggleComplete = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updated);
  };

  return (
    <div className={`container ${mode}`}>
      <div className="todo-card">

        {/* ✅ Context applied ONLY here */}
        <h2
          className="title"
          style={{
            color: mode === "dark" ? "#fff" : "#222",
            transition: "0.3s"
          }}
        >
          My Todos ({todos.length})
        </h2>

        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your task..."
              onChange={handleChange}
              value={todonote}
            />
            <button>
              {editId ? "Update" : "Add"}
            </button>
          </div>

          {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
        </form>

        <div className="todos-container">

          {todos.map((todo) => (
            <div className="border" key={todo.id}>

              {/* ✅ Completed style */}
              <p style={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1
              }}>
                {todo.text}
              </p>

              <div className="icons">

                <MdDelete
                  size={30}
                  className="delete"
                  onClick={() => deleteHandler(todo.id)}
                />

                <HiOutlinePencilSquare
                  size={30}
                  className="pencil"
                  onClick={() => editHandler(todo.id)}
                />

                <FaCheckSquare
                  size={30}
                  className="TiTick"
                  onClick={() => toggleComplete(todo.id)} // ✅ working now
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Mytodos;