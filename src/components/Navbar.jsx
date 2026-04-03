import React, { useContext } from "react";
import "../components/Navbar.css";
import { FaMoon } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Mycontext from "../context/Mycontext";

export function Navbar() {

    const { mode, toggleMode, isAuth, logout } = useContext(Mycontext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/Registration");
    };

    return (
        <nav className={`navbar ${mode}`}>

            <div className="logo">
                TODO ✅
            </div>

            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Taskpage">Tasks</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="wrap">
                <p>Mode: {mode}</p>
                <FaMoon className="icon" onClick={toggleMode} />

                {/* 🔐 AUTH BUTTON */}
                {isAuth ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={() => navigate("/Registration")}>
                        Logout
                    </button>
                )}
            </div>

        </nav>
    );
}