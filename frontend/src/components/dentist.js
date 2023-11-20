import React from "react";
import dentistImage from "../assets/dentist.jpeg";
const Dentist = () => {
  return (
    <div>
      <img src={dentistImage} alt="Dentist" />
      <h2>Dentist</h2>
      <p>Teething trouble? Consult a dental checkup.</p>
    </div>
  );
};

export default Dentist;
