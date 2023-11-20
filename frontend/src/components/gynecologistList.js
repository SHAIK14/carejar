import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/dentalList.css";
const GynecologistList = () => {
  const [gynecologists, setGynecologists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/gynecologists"
        );
        setGynecologists(response.data);
      } catch (error) {
        console.error("Error fetching gynecologist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainList">
      <div className="sub">
        {gynecologists.map((gynecologist) => (
          <div className="content" key={gynecologist.id}>
            <div className="imageclass">
              <img
                src={`http://localhost:3001/images/${gynecologist.image}`}
                alt={gynecologist.name}
              />
            </div>
            <div className="middle">
              <div className="first">
                <h3>{gynecologist.name}</h3>
                <p>{gynecologist.profession}</p>
                <p>Experience: {gynecologist.experience}</p>
                <span className="location-info">
                  <p className="bold-text"> {gynecologist.location}</p>
                  <p> {gynecologist.clinicName}</p>
                </span>
                <p> {gynecologist.consultationFee}</p>
              </div>
              <span className="rating-feedback">
                <p className="rating">{`Rating: ${gynecologist.rating}`}</p>
                <p className="feedback">{gynecologist.feedback}</p>
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

export default GynecologistList;
