<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", userType: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
      console.log(res)
      const { success, message, token, user } = res.data;

      if (!success) {
        toast.error( "Login failed.");
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      console.log('Logging in with:', formData);
>>>>>>> 0d36670 (both file commit)
    }
  };

  return (
<<<<<<< HEAD
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

export default Login;
=======
    <div style={styles.page}>
      <div style={styles.fullWidthContainer}>
        <div style={styles.formWrapper}>
          <h2 style={styles.heading}>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
          <p style={styles.switchText}>
            Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    width: '99vw',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
    backgroundColor: '#000080',
    display: 'flex',
    flexDirection: 'column',
  },
  fullWidthContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '5 20px',
    boxSizing: 'border-box',
  },
  formWrapper: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: 600,
    textAlign: 'center',
  },
  heading: {
    marginBottom: 20,
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: 5,
    color: '#555',
    fontSize: '0.9em',
  },
  input: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    boxSizing: 'border-box',
    fontSize: '1em',
    backgroundColor:'#fff',
    color: '#000', 
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '1em',
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: '0.8em',
    marginTop: 10,
  },
  switchText: {
    marginTop: 15,
    fontSize: '0.9em',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};
>>>>>>> 0d36670 (both file commit)
