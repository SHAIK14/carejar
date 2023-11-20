// src/components/Gynecologist.js
import React from "react";
import gynocologistImg from "../assets/gyno.jpeg";

const Gynecologist = () => {
  return (
    <div>
      <img src={gynocologistImg} alt="Gynecologist" />
      <h2>Gynecologist</h2>
      <p>Specialized care for women's health and reproductive system.</p>
    </div>
  );
};

export default Gynecologist;
