import React from "react"
import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap"
import {
  Linkedin,
  HouseDoorFill,
  PeopleFill,
  SuitClubFill,
  ChatRightDotsFill,
  BellFill,
} from "react-bootstrap-icons"

function MyNavbar() {
  return (
    <div className=" d-flex">
      <Navbar bg="white" expand="lg" className="mx-5">
        <Navbar.Brand href="#home">
          <Linkedin className="logoLinkedin" />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="linkNavbar text-center ">
              <HouseDoorFill />
              <p>Home</p>
            </Nav.Link>
            <Nav.Link href="#home" className="linkNavbar text-center">
              <PeopleFill />
              <p>Rete</p>
            </Nav.Link>
            <Nav.Link href="#home" className="linkNavbar text-center">
              <SuitClubFill />
              <p>Lavoro</p>
            </Nav.Link>
            <Nav.Link href="#home" className="linkNavbar text-center">
              <ChatRightDotsFill />
              <p>Messaggistica</p>
            </Nav.Link>
            <Nav.Link href="#home" className="linkNavbar text-center">
              <BellFill />
              <p>Notifiche</p>
            </Nav.Link>

            <div className="d-flex flex-column text-center">
              <div>
                <HouseDoorFill />
              </div>
              <div>
                <Dropdown className="mx-3 toAddBorder">
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    Tu
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
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
            <div className="d-flex flex-column text-center ">
              <div>
                <HouseDoorFill />
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    Per le aziende
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MyNavbar
