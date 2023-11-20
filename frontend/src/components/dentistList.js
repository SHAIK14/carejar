import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/dentalList.css";
const DentistList = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://carejar-gb6v.onrender.com/api/dentists"
        );
        setDentists(response.data);
      } catch (error) {
        console.error("Error fetching dentist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainList">
      <div className="sub">
        {dentists.map((dentist) => (
          <div className="content" key={dentist.id}>
            <div className="imageclass">
              <img
                src={`https://carejar-gb6v.onrender.com/images/${dentist.image}`}
                alt={dentist.name}
                // style={{ width: "50px", height: "auto" }}
              />
            </div>
            <div className="middle">
              <div className="first">
                <h3>{dentist.name}</h3>
                <p>{dentist.profession}</p>
                <p> {dentist.experience}</p>
                <span className="location-info">
                  <p className="bold-text">{dentist.location}</p>
                  <p>{dentist.clinicName}</p>
                </span>

                <p> {dentist.consultationFee}</p>
              </div>
              <span className="rating-feedback">
                <p className="rating">{`Rating: ${dentist.rating}`}</p>
                <p className="feedback">{` ${dentist.feedback}`}</p>
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

export default DentistList;
