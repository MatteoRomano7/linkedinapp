import { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Analytics from "./Analytics/Analytics";
import Activity from "./Activity/Activity";
import Resources from "./Activity/Resources";
import Training from "./Activity/Training";
import Interests from "./Activity/Interests";
import Experience from "./Activity/Experience";

function Profile() {
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/">vai alla home</Link>

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

    </>
  );
}

export default Profile;
