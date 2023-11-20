import React from "react";
import gynocologistImg from "../assets/gyno.jpeg";
import "./styles/gynecologist.css";

const Gynecologist = () => {
  return (
    <div className="gynecologist-container">
      <img src={gynocologistImg} alt="Gynecologist" />
      <h2>Gynecologist</h2>
      <p>Specialized care for women's health and reproductive system.</p>
    </div>
  );
};

export default Gynecologist;
