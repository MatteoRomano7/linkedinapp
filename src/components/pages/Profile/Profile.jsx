import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import People from "./People/People";
import { Container } from "react-bootstrap";
import Analytics from "./Analytics/Analytics";
import Activity from "./Activity/Activity";
import Resources from "./Resources/Resources";
import Training from "./Activity/Training";
import Interests from "./Activity/Interests";
import Experience from "./Activity/Experience";
import Language from "./Language/Langugage";
import Hiring from "../hiring/Hiring";
import Experiences from "./Experiences/Experiences";
import Header from "./Header/Header";

function Profile() {
  console.log("profile render");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/', {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error in Data Retrieval:", error);
      });
  }, []);

  return (
    <Container className="content-wrapper">
      <div className="profile-main">
        <Header />
        <Analytics />
        <Resources />
        <Activity />
        <Training />
        <Interests />
        <Hiring />
        <Experiences />

      </div>
      <div className="profile-sidebar">
        <Language />
        <People users={users} />
      </div>
    </Container>
  );

  
}

export default Profile;
