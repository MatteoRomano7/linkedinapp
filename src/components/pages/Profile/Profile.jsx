import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import People from "./People/People";
import { Row, Container, Col } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Analytics from "./Analytics/Analytics";
import Activity from "./Activity/Activity";
import Resources from "./Activity/Resources";
import Training from "./Activity/Training";
import Interests from "./Activity/Interests";
import Experience from "./Activity/Experience";
import Language from "./Language/Langugage";
import Hiring from "../hiring/Hiring";

function Profile() {
  console.log('profile render')
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
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
    <>
      <p>ciao sono profilo</p>
      <Header />
      <Link to="/">vai alla home</Link>

      <Container>
        <Row className="d-none d-lg-block col-md-4 ms-4">
          <Col>
          <People users={users} />
          </Col>
        </Row>
      </Container>
      
      <Analytics />
      <hr />
      <Resources />
      <hr />
      <Activity />
      <hr />
      <Experience />
      <hr />  
      <Training />
      <hr />
      <Interests />


    <Language />
    <Hiring />
    </>
  )
}

export default Profile
