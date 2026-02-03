import React, { useState } from 'react';
import "./Home.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Home = ({setEmail, email, setPage}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email) return alert("Enter your email");
    setPage("Propose");

  };

  

  return (
    <div className="home-container">
      <div className="hero-image">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
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
