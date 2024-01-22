import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import People from "./People/People";
import { Row, Container, Col } from "react-bootstrap";

function Profile() {
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
      <p>ciao sono home</p>
      <Link to="/">vai alla home</Link>

      <Container>
        <Row className="d-none d-lg-block col-md-4 ms-4">
          <Col>
          <People users={users} />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Profile;
