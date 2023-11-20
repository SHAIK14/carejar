import React from "react";
import nutrimg from "../assets/nutrion.jpeg";
import "./styles/nutrition.css";
const Nutritionist = () => {
  return (
    <div className="nutritionist-container">
      <img src={nutrimg} alt="Nutritionist" />
      <h2>Nutritionist</h2>
      <p>Personalized nutrition plans for a healthy lifestyle.</p>
    </div>
  );
};

export default Nutritionist;
