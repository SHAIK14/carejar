import React from "react";
import dentistImage from "../assets/dentist.jpeg";
import "./styles/dentist.css";
const Dentist = () => {
  return (
    <div className="dentist-container">
      <img src={dentistImage} alt="Dentist" />
      <h2>Dentist</h2>
      <p>Teething trouble? Consult a dental checkup.</p>
    </div>
  );
};

export default Dentist;
