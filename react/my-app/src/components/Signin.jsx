import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Signing up with:', formData);
      // You can add API request here
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.fullWidthContainer}>
        <div style={styles.formWrapper}>
          <h2 style={styles.heading}>SIGN UP</h2>
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
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
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
            <div style={styles.formGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
          <p style={styles.switchText}>
            Already have an account? <Link to="/login" style={styles.link}>Login</Link>
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
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  formWrapper: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: 600,
    textAlign: 'center',
  },
  heading: {
    marginBottom: 0,
    color: '#333',
  },
  formGroup: {
    marginBottom: 10,
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: 3,
    color: '#555',
    fontSize: '0.9em',
  },
  input: {
    width: '100%',
    padding: 7,
    border: '1px solid #ddd',
    borderRadius: 5,
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
