// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "", userType: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.userType) {
//       toast.warn("Please select the user type");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:2000/api/loginuser", formData);
//       console.log(res)
//       const { success, message, token, user } = res.data;

//       if (!success) {
//         toast.error( "Login failed.");
//         setLoading(false);
//         return;
//       }

//       if (formData.userType !== user.userType) {
//         toast.error("User type does not match with your account.");
//         setLoading(false);
//         return;
//       }

//       toast.success("Login successful");

//       localStorage.setItem("token", token);
//       localStorage.setItem("userId", user.id);
//       localStorage.setItem("userType", user.userType);

//       switch (user.userType) {
//         case "admin":
//           navigate("/admin/dashboard");
//           break;
//         case "user":
//           navigate("/user/dashboard");
//           break;
//         case "donor":
//           navigate("/donor/dashboard");
//           break;
//         default:
//           toast.warn("Invalid user type.");
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || "Error occurred during login.";
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url('https://img.freepik.com/premium-photo/dove-heart-flying-hand-international-peace-day-faith-freedom-charity-help-concept-humanitarian-aid_738732-4684.jpg?ga=GA1.1.303889060.1744178436&semt=ais_hybrid&w=740')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "99vw",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "400px",
//           padding: "30px",
//           borderRadius: "15px",
//           backdropFilter: "blur(10px)",
//           backgroundColor: "rgba(255, 255, 255, 0.15)",
//           boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//           color: "#fff",
//           textAlign: "center",
//         }}
//       >
//         <ToastContainer />
//         <h2 style={{ marginBottom: "20px", color: "#fff" }}>User Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//             autoFocus
//             style={inputStyle}
//           />
//           <div style={{ position: "relative" }}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//               style={{ ...inputStyle, paddingRight: "70px" }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               style={toggleButtonStyle}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <select
//             name="userType"
//             value={formData.userType}
//             onChange={handleChange}
//             required
//             style={{ ...inputStyle, backgroundColor: "#ADD8E6", color: "#000" }}
//           >
//             <option value="" disabled>Select User Type</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//             <option value="donor">Donor</option>
//           </select>
//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               ...buttonStyle,
//               backgroundColor: loading ? "#999" : "#1E90FF",
//             }}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

         
//           <button
//             type="button"
//             onClick={() => navigate("/signup")}
//             style={{ ...buttonStyle, backgroundColor: "crimson", marginTop: "10px" }}
//           >
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "15px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   fontSize: "16px",
//   boxSizing: "border-box",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "12px",
//   borderRadius: "8px",
//   color: "#fff",
//   border: "none",
//   fontSize: "16px",
//   cursor: "pointer",
//   transition: "0.3s ease-in-out",
// };

// const toggleButtonStyle = {
//   position: "absolute",
//   right: "10px",
//   top: "50%",
//   transform: "translateY(-50%)",
//   background: "transparent",
//   border: "none",
//   color: "#00f",
//   cursor: "pointer",
//   fontWeight: "bold",
// };

// export default Login;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", userType: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.userType) {
      toast.warn("Please select the user type");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:2000/api/loginuser", formData);
      const { success, message, token, user } = res.data;

      if (!success) {
        toast.error("Login failed.");
        setLoading(false);
        return;
      }

      if (formData.userType !== user.userType) {
        toast.error("User type does not match with your account.");
        setLoading(false);
        return;
      }

      toast.success("Login successful");
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userType", user.userType);

      switch (user.userType) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "user":
          navigate("/user/dashboard");
          break;
        case "donor":
          navigate("/donor/dashboard");
          break;
        default:
          toast.warn("Invalid user type.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Error occurred during login.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotEmail) {
      toast.warn("Please enter your email.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:2000/api/forgotpassword", {
        email: forgotEmail,
      });
      if (res.data.success) {
        toast.success("Password reset instructions sent to email.");
        setShowForgotModal(false);
      } else {
        toast.error(res.data.message || "Failed to send reset link.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/dove-heart-flying-hand-international-peace-day-faith-freedom-charity-help-concept-humanitarian-aid_738732-4684.jpg?ga=GA1.1.303889060.1744178436&semt=ais_hybrid&w=740')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "99vw",
        height: "100vh",
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
        <h2 style={{ marginBottom: "20px", color: "#fff" }}>User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            autoFocus
            style={inputStyle}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
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
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="donor">Donor</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...buttonStyle,
              backgroundColor: loading ? "#999" : "#1E90FF",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            style={{ ...buttonStyle, backgroundColor: "crimson", marginTop: "10px" }}
          >
            Signup
          </button>

          <p
            style={{
              marginTop: "12px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "red",
            }}
            onClick={() => navigate("/forget/password")}
          >
            Forgot Password?
          </p>
        </form>
      </div>

      {/* Forgot Password Modal */}
      {/* {showForgotModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <h4 style={{ marginBottom: "20px" }}>Forgot Password</h4>
            <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ ...inputStyle, marginBottom: "20px" }}
            />
            <button
              onClick={handleForgotPassword}
              style={{ ...buttonStyle, backgroundColor: "#28a745" }}
            >
              Send Reset Link
            </button>
            <button
              onClick={() => setShowForgotModal(false)}
              style={{ ...buttonStyle, backgroundColor: "#dc3545", marginTop: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}
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

export default Login;
