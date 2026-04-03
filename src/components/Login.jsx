// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// // import './Login.css';

// const Login = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const validate = () => {
//         let newErrors = {};

//         if (!formData.email) {
//             newErrors.email = "Email is required";
//         }

//         if (!formData.password) {
//             newErrors.password = "Password is required";
//         }

//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const validationErrors = validate();
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {

//             const storedData = JSON.parse(localStorage.getItem("reg"));

//             if (!storedData) {
//                 alert("No user found. Please register first.");
//                 return;
//             }

//             if (
//                 formData.email === storedData.email &&
//                 formData.password === storedData.password
//             ) {
//                 alert("Login Successful ✅");

//                 localStorage.setItem("isAuth", true); // for protected routes
//                 navigate('/task'); // redirect after login
//             } else {
//                 alert("Invalid email or password ❌");
//             }
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-box">
//                 <h1>Login</h1>

//                 <form onSubmit={handleSubmit}>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p className="validation">{errors.email}</p>}

//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Enter password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && <p className="validation">{errors.password}</p>}

//                     <div className="login-button">
//                         <button type="submit">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;