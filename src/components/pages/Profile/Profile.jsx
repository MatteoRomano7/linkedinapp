import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
/* import People from "./People/People"; */
import { Container } from "react-bootstrap";
import Analytics from "./Analytics/Analytics";
import Activity from "./Activity/Activity";
import Resources from "./Resources/Resources";
import Training from "./Training/Training";
import Interests from "./Interests/Interests";
import Hiring from "../hiring/Hiring";
import Experiences from "./Experiences/Experiences";
import Header from "./Header/Header";
import Language from "./Language/Langugage";
import data from "../../../data/profiles.json"
import People from "./People/People"

function Profile() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.token);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log("Token from Redux:", userToken);
    const fetchData = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error("Error in Data Retrieval:", response.status);
        }
      } catch (error) {
        console.error("Error in Data Retrieval:", error);
      }
    };

    fetchData();
  }, [userToken]);

  useEffect(() => {
    setUsers(data)
  }, [])
  return (
    <Container className="content-wrapper">
      <div className="profile-main">
        <Header />
        <Analytics />
        <Resources />
        <Activity />
        <Training />
        <Interests />
        <Experiences />
      </div>
      <div className="profile-sidebar">
        <Language />
        <People users={users} />
      </div>
    </Container>
  );

}

export default Profile
