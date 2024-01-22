import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function HeroModal({ pepe, onHide, user }) {
  const [profileData, setProfileData] = useState(user);
  const [tempData, setTempData] = useState({});

  function updateProfile() {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
      },
      body: {
        ...user,
        name: profileData.name,
        surname: profileData.surname,
        title: profileData.title,
        area: profileData.area,
        //   bio: profileData.bio,
        //   email: profileData.email,
        //   image: profileData.img,
        //   username: profileData.username,
      },
    });
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={pepe}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifica Presentazione
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <small>* Indica che è obbligatorio</small>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setProfileData({ ...profileData, ...tempData });
            updateProfile()
            console.log(profileData);
            console.log(tempData)
          }}
        >
          <Form.Group>
            <Form.Label>Nome*</Form.Label>
            <Form.Control
              id="name"
              required
              onChange={(e) =>
                setTempData({ ...tempData, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cognome*</Form.Label>
            <Form.Control
              id="surname"
              onChange={(e) =>
                setTempData({ ...tempData, surname: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Inserisci pronomi personalizzati</Form.Label>
            <Form.Control
              id="pronouns"
              onChange={(e) =>
                setTempData({ ...tempData, pronouns: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              id="title"
              onChange={(e) =>
                setTempData({ ...tempData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              id="address"
              onChange={(e) =>
                setTempData({ ...tempData, area: e.target.value })
              }
            />
          </Form.Group>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default HeroModal;
