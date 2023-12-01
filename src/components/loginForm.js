// LoginForm.js
import React, { useState } from 'react';
import service from './service';
import './loginForm.css'; // Import the CSS file
import FormDetail from './FormDetail'; // Import the FormDetail component

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showFormDetail, setShowFormDetail] = useState(false); // State to control whether to show FormDetail


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email.trim()) {
      setError("Email cannot be empty");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Clear any previous errors
    setError("");

    try {
      // Call the service to create a user
      const response = await service({ email, password });
      console.log('User created successfully:', response);
      setSuccessMessage("Form Successfully Submitted.");

      // Show FormDetail after a delay
      setTimeout(() => {
        setShowFormDetail(true);
      }, 2000);
    } catch (error) {
      console.error('Error creating user:', error);
      setSuccessMessage(""); // Clear success message if there's an error
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      {showFormDetail ? (
        <FormDetail email={email} password={password} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className='text'>Login Form</h2>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      )}
      {error && <p>{error}</p>}
      {successMessage && !showFormDetail && (
        <p className="success-message">{successMessage}</p>
      )}
    </div>
  );
}
