import React from "react";
import "../People/People.css";
import { Container, Button, Card, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SinglePeople = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>Nessun utente disponibile.</p>;
  }

  return (
    <div>
      {users.map((user) => (
          <div key={user._id} className="person-container">
            <div>
              <img
                src={user.image}
                alt="foto"
                className="fotoTonde align-self-start"
              />
            </div>
            <div className="person-details">
              <div className="">
                <Link to={`/profile/${user._id}`} className="link-sidebar">
                  {user.name} {user.surname}
                </Link>
                <span className="text-muted fs-6 ms-1">• 3°+</span>
              </div>
              <div className="">{user.title}</div>
              <button className="my-2 bottoneSideBar">
                <BsFillPersonPlusFill className="me-2" />
                Collegati
              </button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default SinglePeople;
