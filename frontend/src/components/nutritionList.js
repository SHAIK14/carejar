import React, { useState, useEffect } from "react";
import axios from "axios";

const NutritionistList = () => {
  const [nutritionists, setNutritionists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/nutritionists"
        );
        setNutritionists(response.data);
      } catch (error) {
        console.error("Error fetching nutritionist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Nutritionist Doctors</h2>
      <ul>
        {nutritionists.map((nutritionist) => (
          <li key={nutritionist.id}>
            <img
              src={`http://localhost:3001/images/${nutritionist.image}`}
              alt={nutritionist.name}
              style={{ width: "50px", height: "auto" }}
            />
            <h3>{nutritionist.name}</h3>
            <p>{nutritionist.profession}</p>
            <p>Experience: {nutritionist.experience}</p>
            <p>Location: {nutritionist.location}</p>
            <p>Clinic: {nutritionist.clinicName}</p>
            <p>Consultation Fee: {nutritionist.consultationFee}</p>
            <p>Rating: {nutritionist.rating}</p>
            <p>Feedback: {nutritionist.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionistList;
