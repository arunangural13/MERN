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
