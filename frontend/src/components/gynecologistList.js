import React, { useState, useEffect } from "react";
import axios from "axios";

const GynecologistList = () => {
  const [gynecologists, setGynecologists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch gynecologist data from the backend API
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
    <div>
      <h2>Gynecologist Doctors</h2>
      <ul>
        {gynecologists.map((gynecologist) => (
          <li key={gynecologist.id}>
            <img
              src={`http://localhost:3001/images/${gynecologist.image}`}
              alt={gynecologist.name}
              style={{ width: "50px", height: "auto" }}
            />
            <h3>{gynecologist.name}</h3>
            <p>{gynecologist.profession}</p>
            <p>Experience: {gynecologist.experience}</p>
            <p>Location: {gynecologist.location}</p>
            <p>Clinic: {gynecologist.clinicName}</p>
            <p>Consultation Fee: {gynecologist.consultationFee}</p>
            <p>Rating: {gynecologist.rating}</p>
            <p>Feedback: {gynecologist.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GynecologistList;
