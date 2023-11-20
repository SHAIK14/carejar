const express = require("express");
const router = express.Router();

const doctorData = {
  dentists: [
    {
      id: 1,
      name: "Dr. ujjval",
      profession: "Dentist",
      image: "dentist1.png",
      experience: "10 years of experience overall",
      location: "Mumbai",
      clinicName: "Healthy Smiles Dental Clinic",
      consultationFee: "₹200 consultationFee at clinc",
      rating: "98%",
      feedback: "18 patient stories",
    },
    {
      id: 2,
      name: "Dr. ramakrishna",
      profession: "dentist",
      image: "dentist2.jpeg",
      experience: "8 years of experience overall",
      location: "delhi",
      clinicName: "Sparkling Dental Care",
      consultationFee: "₹180 consultationFee at clinc",
      rating: "95%",
      feedback: "22 patient stories",
    },
  ],
  gynecologists: [
    {
      id: 3,
      name: "Dr. Aishwarya Sharma",
      profession: "Gynecologist",
      image: "gynecologist1.jpeg",
      experience: "12 years of experience overall",
      location: "bangalore",
      clinicName: "Women's Wellness Center",
      consultationFee: "₹250 consultationFee at clinc",
      rating: "97%",
      feedback: "20 patient stories",
    },
    {
      id: 4,
      name: "Dr. Siddharth Verma",
      profession: "Gynecologist",
      image: "gynecologist2.jpeg",
      experience: "9 years of experience overall",
      location: "hyderabad",
      clinicName: "New Life Maternity Hospital",
      consultationFee: "₹220 consultationFee at clinc",
      rating: "96%",
      feedback: "25 patient stories",
    },
  ],
  nutritionists: [
    {
      id: 5,
      name: "Dr.Anurag",
      profession: "Nutritionist",
      image: "nutritionist1.jpg",
      experience: "8 years of experience overall",
      location: "kolkata",
      clinicName: "NutriWellness Center",
      consultationFee: "₹150 consultationFee at clinc",
      rating: "90%",
      feedback: "15 patient stories",
    },
    {
      id: 6,
      name: "Dr. Anuj",
      profession: "Nutritionist",
      image: "nutritionist2.jpeg",
      experience: "10 years of experience overall",
      location: "pune",
      clinicName: "Healthy Living Nutrition",
      consultationFee: "₹180 consultationFee at clinc",
      rating: "92%",
      feedback: "19 patient stories",
    },
  ],
};

router.get("/dentists", (req, res) => {
  res.json(doctorData.dentists);
});

router.get("/gynecologists", (req, res) => {
  res.json(doctorData.gynecologists);
});

router.get("/nutritionists", (req, res) => {
  res.json(doctorData.nutritionists);
});

module.exports = router;
