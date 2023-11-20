import React, { useState, useEffect } from "react";
import axios from "axios";

const DentistList = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/dentists");
        setDentists(response.data);
      } catch (error) {
        console.error("Error fetching dentist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dentist Doctors</h2>
      <ul>
        {dentists.map((dentist) => (
          <li key={dentist.id}>
            <img
              src={`http://localhost:3001/images/${dentist.image}`}
              alt={dentist.name}
              style={{ width: "50px", height: "auto" }}
            />
            <h3>{dentist.name}</h3>
            <p>{dentist.profession}</p>
            <p>Experience: {dentist.experience}</p>
            <p>Location: {dentist.location}</p>
            <p>Clinic: {dentist.clinicName}</p>
            <p>Consultation Fee: {dentist.consultationFee}</p>
            <p>Rating: {dentist.rating}</p>
            <p>Feedback: {dentist.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DentistList;
