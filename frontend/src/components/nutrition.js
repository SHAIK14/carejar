// src/components/Nutritionist.js
import React from "react";
import nutrimg from "../assets/nutrion.jpeg";
const Nutritionist = () => {
  return (
    <div>
      <img src={nutrimg} alt="Nutritionist" />
      <h2>Nutritionist</h2>
      <p>Personalized nutrition plans for a healthy lifestyle.</p>
    </div>
  );
};

export default Nutritionist;
