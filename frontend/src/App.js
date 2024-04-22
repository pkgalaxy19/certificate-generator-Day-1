import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    authkey:""
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
      console.log('Form submitted successfully!');
      axios.post('http://localhost:5000/users', formData)
        .then((response) => {
          console.log('API response:', response.data);
          alert(response.data)
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        authkey:""
      });
      setErrors({});
  };
  return (

<div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Enter Your to Access the Certificate</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_no">Mobile Number</label>
          <input
            type="tel"
            id="mobile_no"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="authkey">Auth Key</label>
          <input
            type="text"
            id="authkey"
            name="authkey"
            value={formData.authkey}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>

);
}

export default App;
