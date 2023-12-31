import React from "react";
import { Link } from "react-router-dom";
import Dentist from "./dentist";
import Gynecologist from "./gynecologist";
import Nutritionist from "./nutrition";
import "./styles/professions.css";
const Professions = () => {
  return (
    <div className="main">
      <h1>Book an appointment for an in-clinic consultation</h1>
      <p>find exprienced doctors across all specalities</p>
      <div className="link-container">
        <Link to="/dental">
          <Dentist />
        </Link>
        <Link to="/gynecologist">
          <Gynecologist />
        </Link>
        <Link to="/nutrition">
          <Nutritionist />
        </Link>
      </div>
    </div>
  );
};

export default Professions;
