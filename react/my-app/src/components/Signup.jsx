<<<<<<< HEAD
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//     userType: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, phone, address, userType } = formData;

//     if (!name || !email || !password || !phone || !address || !userType) {
//       toast.warn("All fields are required");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:2000/api/createuser", formData);
//       const { success, message, error } = res.data;

//       if (!success) {
//         if (Array.isArray(error)) {
//           error.forEach((errMsg) => toast.error(errMsg));
//         } else {
//           toast.error(message || "User creation failed");
//         }
//         return;
//       }

//       toast.success(message || "User created successfully");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <ToastContainer />
//         <h2 style={styles.header}>Register Now</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Your Address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <div style={{ position: "relative" }}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               style={{ ...styles.input, paddingRight: "80px" }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               style={styles.togglePasswordBtn}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <select
//             name="userType"
//             value={formData.userType}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           >
//             <option value="" disabled>Select Role </option>
//             {/* <option value="admin">Admin</option> */}
//             <option value="user">User</option>
//             <option value="donor">Donor</option>
//           </select>
//           <button type="submit" style={styles.submitBtn}>Sign Up</button>
//           <p style={styles.loginLink}>
//             Already have an account?{" "}
//             <Link to="/login" style={styles.link}>Login</Link>
//           </p>
//         </form>
//       </div>
//       <div style={styles.illustrationContainer}>
//         <img
//           src="https://marketplace.canva.com/EAFQ2PnDmVk/1/0/1600w/canva-simple-black-and-turquoise-welcome-instagram-post-_L7k8MOUlNE.jpg"
//           alt="Form Art"
//           style={styles.illustration}
//         />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #B4A7D6, #A9C9F0)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "'Poppins', sans-serif",
//     padding: "20px",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     borderRadius: "30px",
//     maxWidth: "600px",
//     display: "flex",
//     boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
//     overflow: "hidden",
//     flexDirection: "column",
//     padding: "40px",
//   },
//   header: {
//     color: "#333",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 16px",
//     margin: "10px 0",
//     borderRadius: "10px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//     outline: "none",
//   },
//   togglePasswordBtn: {
//     position: "absolute",
//     right: "15px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     background: "none",
//     border: "none",
//     color: "#667EEA",
//     cursor: "pointer",
//   },
//   submitBtn: {
//     width: "100%",
//     padding: "14px",
//     background: "linear-gradient(90deg, #B4A7D6, #A9C9F0)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "10px",
//     fontWeight: "bold",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   loginLink: {
//     marginTop: "15px",
//     textAlign: "center",
//     color: "#666",
//   },
//   link: {
//     color: "#667EEA",
//     fontWeight: "bold",
//   },
//   illustrationContainer: {
//     flex: 1,
//     background: "linear-gradient(to top right, #B4A7D6, #A9C9F0)",
//     padding: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   illustration: {
//     maxWidth: "100%",
//     height: "auto",
//   },
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    userType: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, phone, address, userType } = formData;
    if (!name || !email || !password || !phone || !address || !userType) {
      toast.warn("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:2000/api/createuser", formData);
      const { success, message, error } = res.data;

      if (!success) {
        if (Array.isArray(error)) {
          error.forEach((errMsg) => toast.error(errMsg));
        } else {
          toast.error(message || "User creation failed");
        }
        return;
      }

      toast.success(message || "User created successfully");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/dove-heart-flying-hand-international-peace-day-faith-freedom-charity-help-concept-humanitarian-aid_738732-4684.jpg?ga=GA1.1.303889060.1744178436&semt=ais_hybrid&w=740')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "99vw",
        // height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <ToastContainer />
        <h2 style={{ marginBottom: "20px", color: "#fff" }}>User Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ ...inputStyle, paddingRight: "70px" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={toggleButtonStyle}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            style={{ ...inputStyle, backgroundColor: "#ADD8E6", color: "#000" }}
          >
            <option value="" disabled>Select User Type</option>
            <option value="user">User</option>
            <option value="donor">Donor</option>
          </select>
          <button
            type="submit"
            style={{ ...buttonStyle, backgroundColor: "#1E90FF" }}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            style={{ ...buttonStyle, backgroundColor: "crimson", marginTop: "10px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  color: "#fff",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
};

const toggleButtonStyle = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "transparent",
  border: "none",
  color: "#00f",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Signup;
=======
// import React, { useState } from 'react';

// function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [signupData, setSignupData] = useState({
//     name: '',
//     signupEmail: '',
//     phone: '',
//     address: '',
//     signupPassword: '',
//     confirmPassword: '',
//   });

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleSignupChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData({ ...signupData, [name]: value });
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted:', loginData);
//     alert('Login submitted!');
//   };

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     const { signupPassword, confirmPassword } = signupData;
//     if (signupPassword !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     console.log('Signup submitted:', signupData);
//     alert('Signup submitted!');
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>

//         {isLogin ? (
//           <form onSubmit={handleLoginSubmit} style={styles.form}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={loginData.email}
//               onChange={handleLoginChange}
//               required
//               style={styles.input}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//               required
//               style={styles.input}
//             />
//             <button
//               type="submit"
//               style={styles.button}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = '#003380')}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = '#001f4d')}
//             >
//               Login
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleSignupSubmit} style={styles.form}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={signupData.name}
//               onChange={handleSignupChange}
//               required
//               style={styles.input}
//             />
//             <input
//               type="email"
//               name="signupEmail"
//               placeholder="Email"
//               value={signupData.signupEmail}
//               onChange={handleSignupChange}
//               required
//               style={styles.input}
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={signupData.phone}
//               onChange={handleSignupChange}
//               required
//               style={styles.input}
//             />
//             <textarea
//               name="address"
//               placeholder="Address"
//               value={signupData.address}
//               onChange={handleSignupChange}
//               required
//               style={{ ...styles.input, height: '60px', resize: 'none' }}
//             />
//             <input
//               type="password"
//               name="signupPassword"
//               placeholder="Set Password"
//               value={signupData.signupPassword}
//               onChange={handleSignupChange}
//               required
//               style={styles.input}
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={signupData.confirmPassword}
//               onChange={handleSignupChange}
//               required
//               style={styles.input}
//             />
//             <button
//               type="submit"
//               style={styles.button}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = '#003380')}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = '#001f4d')}
//             >
//               Sign Up
//             </button>
//           </form>
//         )}

//         <div style={styles.toggle}>
//           {isLogin ? (
//             <p>
//               Don&apos;t have an account?{' '}
//               <button onClick={() => setIsLogin(false)} style={styles.linkButton}>
//                 Sign Up
//               </button>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{' '}
//               <button onClick={() => setIsLogin(true)} style={styles.linkButton}>
//                 Login
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: '100vh',
//     width: '1257px',
//     backgroundColor: '#000080',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//     boxSizing: 'border-box',
//   },
//   container: {
//     width: '100%',
//     maxWidth: '420px',
//     padding: '30px',
//     textAlign: 'center',
//     borderRadius: '12px',
//     background: '#ffffff',
//     boxShadow: '0 8px 25px rgba(0, 0, 128, 0.2)',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     color: '#001f4d',
//     marginBottom: '25px',
//     fontSize: '24px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   input: {
//     padding: '12px',
//     fontSize: '16px',
//     border: '1px solid #a3c2f0',
//     borderRadius: '6px',
//     backgroundColor: '#f9fbff',
//     outline: 'none',
//     color: '#000',
//     width: '100%',
//     boxSizing: 'border-box',
//   },
//   button: {
//     marginTop: '10px',
//     padding: '12px',
//     fontSize: '16px',
//     backgroundColor: '#001f4d',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   toggle: {
//     marginTop: '20px',
//     fontSize: '14px',
//     color: '#333',
//   },
//   linkButton: {
//     background: 'none',
//     color: '#001f4d',
//     border: 'none',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     padding: '0',
//     fontSize: '14px',
//   },
// };

// export default AuthPage;
>>>>>>> 0d36670 (both file commit)
