import React, { useState } from 'react';
import "./Home.css";

const Home = ({setEmail, email, setPage}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email) return alert("Enter your email");
    setPage("Propose");

  };

  return (
    <div className="home-container">
      <div className="hero-image">
        <img src="/src/assets/img1.jpg" alt="Bimbo" />
        <img src="/src/assets/img2.jpg" alt="Bimbo" />
        <img src="/src/assets/img3.jpg" alt="Bimbo" />
        <img src="/src/assets/img4.jpg" alt="Bimbo" />
        <img src="/src/assets/img5.jpg" alt="Bimbo" />
        <img src="/src/assets/img6.jpg" alt="Bimbo" />
      </div>

      <h1 className="home-title">Hi, Bimbo...</h1>
      <form onSubmit={handleSubmit} className="home-form">
        <input 
          type="email" 
          placeholder="Enter your mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-btn">Let's Go...</button>
      </form>
    </div>
  );
};

export default Home;
