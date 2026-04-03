import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registration.css';
const Registration = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required"
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "invalid email format";
        }

        if (!formData.confirmpassword) {
            newErrors.confirmpassword = "confirm password is required";
        } else if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "password do not match"
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validitionErrors = validate();
        setErrors(validitionErrors)

        if (Object.keys(validitionErrors).length === 0) {
            localStorage.setItem("reg", JSON.stringify(formData));
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
            });
            navigate('/');

        }
    }
    return (<>
        <div className="reg-page">
            <div className="reg-box">
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="validation">{errors.name}</p>}
                    <label>Email Address </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="validation">{errors.email}</p>}
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="confirm-password"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                    />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}

                    <div className="reg-button">
                        <button type="submit">Registration  </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default Registration;