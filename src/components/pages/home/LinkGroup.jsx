import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";

const LinkGroup = () => {
  return (
    <div>
      <Card>
        <ul className="home-list">
          <li>
            <a href="#" className="home-link">Gruppi</a>
          </li>
          <li className="d-flex justify-content-between">
            <a href="#" className="home-link">Eventi</a>
            <Plus size={24}/>
          </li>
          <li>
            <a href="#" className="home-link">Hashtag seguiti</a>
          </li>
        </ul>
        <hr />
        <p className="text-center text-secondary">Scopri di piú</p>
      </Card>
    </div>
  );
};
export default LinkGroup;
