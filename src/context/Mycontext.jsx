import React, { createContext, useState, useEffect } from 'react';

const Mycontext = createContext();

export const AppcontextProvider = (props) => {

    // 🌙 Theme
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("mode") || "dark";
    });

    const toggleMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        localStorage.setItem("mode", mode);
        document.body.className = mode;
    }, [mode]);

    // 🔐 AUTH SYSTEM
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.setItem("isAuth", false);
        setIsAuth(false);
    };

    return (
        <Mycontext.Provider value={{ mode, toggleMode, isAuth, login, logout }}>
            {props.children}
        </Mycontext.Provider>
    );
};

export default Mycontext;