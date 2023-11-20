import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/dentalList.css";
const NutritionistList = () => {
  const [nutritionists, setNutritionists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://carejar-gb6v.onrender.com/api/nutritionists"
        );
        setNutritionists(response.data);
      } catch (error) {
        console.error("Error fetching nutritionist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainList">
      <div className="sub">
        {nutritionists.map((nutritionist) => (
          <div className="content" key={nutritionist.id}>
            <div className="imageclass">
              <img
                src={`https://carejar-gb6v.onrender.com/images/${nutritionist.image}`}
                alt={nutritionist.name}
              />
            </div>
            <div className="middle">
              <div className="first">
                <h3>{nutritionist.name}</h3>
                <p>{nutritionist.profession}</p>
                <p>Experience: {nutritionist.experience}</p>
                <span className="location-info">
                  <p className="bold-text"> {nutritionist.location}</p>
                  <p> {nutritionist.clinicName}</p>
                </span>
                <p>{nutritionist.consultationFee}</p>
              </div>
              <span className="rating-feedback">
                <p className="rating">{`Rating: ${nutritionist.rating}`}</p>
                <p className="feedback">{nutritionist.feedback}</p>
              </span>
            </div>
            <div className="appointment-section">
              <p className="available-today-tag">Available Today</p>
              <button className="book-appointment-btn">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionistList;
