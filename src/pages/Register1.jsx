import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register1.css';

function Register1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationError("Passwords do not match.");
      return;
    }

    // Basic validation (you might want more robust validation)
    if (!firstName || !lastName || !email || !phoneNumber || !country || !password) {
      setRegistrationError("Please fill in all required fields.");
      return;
    }

    setRegistrationError(''); // Clear any previous errors

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      password,
    };

    // In a real application, you would send this data to your backend API
    console.log('Registration Data:', userData);

    // Example of a simulated API call (replace with your actual API call)
    try {
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (response.ok) {
      //   // Registration successful, redirect to login
      //   console.log('Registration successful!');
      //   navigate('/login'); // Programmatically navigate to the login page
      // } else {
      //   const errorData = await response.json();
      //   setRegistrationError(errorData.message || 'Registration failed.');
      // }
      // For now, simulate success and redirect:
      console.log('Simulated registration successful!');
      navigate('/login'); // Programmatically navigate to the login page
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationError('An error occurred during registration.');
    }
  };

  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      {registrationError && <p className="error-message">{registrationError}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register1;