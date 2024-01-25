import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../redux/actions";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  Col,
  Row,
} from "react-bootstrap";
import {
  Linkedin,
  HouseDoorFill,
  PeopleFill,
  SuitClubFill,
  ChatRightDotsFill,
  BellFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons";

function MyNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <Navbar bg="white" expand="lg" className="sticky-top">
      <Container className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <Linkedin size={32} className="logoLinkedin me-2" />
          </Link>
          <Form
            className="tuam"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(fetchJobs(searchQuery, "search"));
              navigate(`/jobs/${searchQuery}`, {replace: true})
            }}
          >
            <FormControl
              type="text"
              placeholder="Cerca"
              className="mr-sm-2"
              style={{ width: "300px" }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className="ml-auto align-items-center">
              <Col>
                <Link to="/" className="nav-link navlink-item">
                  <HouseDoorFill />
                  <p>Home</p>
                </Link>
              </Col>
              <Col>
                <Link to="/" className="linkNavbar nav-link navlink-item">
                  <PeopleFill />
                  <p>Rete</p>
                </Link>
              </Col>
              <Col>
                <Link to="/jobs" className="linkNavbar nav-link navlink-item">
                  <SuitClubFill />
                  <p>Lavoro</p>
                </Link>
              </Col>
              <Col>
                <Nav.Link href="#home" className="linkNavbar  navlink-item">
                  <ChatRightDotsFill />
                  <p>Messaggistica</p>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#home" className="linkNavbar navlink-item">
                  <BellFill />
                  <p>Notifiche</p>
                </Nav.Link>
              </Col>

              <Col>
                <div className="navlink-item">
                  <HouseDoorFill />

                  <div>
                    <Dropdown className="mx-3 toAddBorder">
                      <Dropdown.Toggle
                        variant="transparent"
                        id="dropdown-basic"
                        style={{ padding: "0 0 1rem 0" }}
                      >
                        Tu
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link to="/profile/me" className="dropdown-item">
                          Action
                        </Link>

                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Col>
              <Col>
                <Nav.Link href="#home" className="linkNavbar navlink-item">
                  <Grid3x3GapFill />
                  <p>Per le aziende</p>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#home" className="linkNavbar navlink-item">
                  <p>Prova premium per 0 euro</p>
                </Nav.Link>
              </Col>
            </Row>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
