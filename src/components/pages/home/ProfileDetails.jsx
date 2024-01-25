import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { PersonFillAdd } from "react-bootstrap-icons";
import { App } from "react-bootstrap-icons";
import { BookmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const profilo = useSelector((state) => state.profile);

  return (
    <div>
      <Card>
        <Link to="/profile/me" className="propic-container">
          <Card.Img
            className="details-image"
            variant="top"
            src={profilo.image}
          />
          <img className="home-propic" src={profilo.image} />
        </Link>

        <Card.Body>
          <div className="text-center">
            <h2>{`${profilo.name} ${profilo.surname}`}</h2>
            <p>{profilo.title}</p>
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <p className="m-0 py-2">Collegamenti</p>
              <div className="d-flex align-items-center">
                <PersonFillAdd />
              </div>{" "}
            </div>
            <p className="fw-bold">Espandi la tua rete</p>
          </div>
          <div>
            <hr />
            <div>
              <p>Accedi a strumenti e informazioni in esclusiva</p>
              <div className="d-flex align-items-center">
                <App className="use"/>
                <p className="fw-bold mb-0 ms-2 py-2">Prova Premium per 0 EUR</p>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <BookmarkFill />
                <p  className="mb-0 ms-2 py-2">I miei elementi</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProfileDetails;
