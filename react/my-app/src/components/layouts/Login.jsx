import React, { useState } from 'react';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    signupEmail: '',
    phone: '',
    address: '',
    signupPassword: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    alert('Login submitted!');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const { signupPassword, confirmPassword } = signupData;
    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup submitted:', signupData);
    alert('Signup submitted!');
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} style={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              style={styles.input}
            />
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#003380')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#001f4d')}
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={signupData.name}
              onChange={handleSignupChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="signupEmail"
              placeholder="Email"
              value={signupData.signupEmail}
              onChange={handleSignupChange}
              required
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={signupData.phone}
              onChange={handleSignupChange}
              required
              style={styles.input}
            />
            <textarea
              name="address"
              placeholder="Address"
              value={signupData.address}
              onChange={handleSignupChange}
              required
              style={{ ...styles.input, height: '60px', resize: 'none' }}
            />
            <input
              type="password"
              name="signupPassword"
              placeholder="Set Password"
              value={signupData.signupPassword}
              onChange={handleSignupChange}
              required
              style={styles.input}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
              style={styles.input}
            />
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#003380')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#001f4d')}
            >
              Sign Up
            </button>
          </form>
        )}

        <div style={styles.toggle}>
          {isLogin ? (
            <p>
              Don&apos;t have an account?{' '}
              <button onClick={() => setIsLogin(false)} style={styles.linkButton}>
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} style={styles.linkButton}>
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    width: '1257px',
    backgroundColor: '#000080',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  container: {
    width: '100%',
    maxWidth: '420px',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0 8px 25px rgba(0, 0, 128, 0.2)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#001f4d',
    marginBottom: '25px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #a3c2f0',
    borderRadius: '6px',
    backgroundColor: '#f9fbff',
    outline: 'none',
    color: '#000',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: '10px',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#001f4d',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  toggle: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#333',
  },
  linkButton: {
    background: 'none',
    color: '#001f4d',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0',
    fontSize: '14px',
  },
};

export default AuthPage;
