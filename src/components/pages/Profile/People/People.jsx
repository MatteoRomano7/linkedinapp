import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SinglePeople from "./SinglePeople";

const People = ({ users }) => {
  return (
    <Container className="bg-white rounded mt-3 pb-3">
      <Row className="d-flex flex-column border mb-2">
        <Col>
          <h4 className="fw-bold mt-2">Trova le persone giuste</h4>
        </Col>
        <Col>
          {!users ? (<p>Nessun utente disponibile.</p>) : (<SinglePeople users={users.slice(5, 10)} />)}
        </Col>
      </Row>
      <Row className="d-flex flex-column border">
        <Col>
          <h4 className="fw-bold mt-2">Persone che potresti conoscere</h4>
        </Col>
        <Col>
          {!users ? (<p>Nessun utente disponibile.</p>) : (<SinglePeople users={users.slice(0, 5)} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default People;
