import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      if (response.status === 200) {
        // alert('Login successful!');
        navigate('/form'); // Redirect to the home page after successful login
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.log}>
          <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Log In</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
        {/* <a href="/signup" className={styles.signupLink}>Don't have an account? Sign Up</a> */}
      </div>
    </div>

    </div>
  
  );
};

export default Login;
