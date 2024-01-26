import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AddExperienceModal = ({ profile }) => {
  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const formDataExperienceImg = new FormData();

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleShow = () => setShow(true);
  const showExperience = () => setModalExperience(true);
  const closeExperience = () => setModalExperience(false);

  const [modalExperience, setModalExperience] = useState(false);

  const handleInputChange = (property, value) => {
    setExperience({
      ...experience,
      [property]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem(
          "userId"
        )}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        setShowAlert(true);
        window.location.reload()
      } else {
        throw new Error("Errore nel salvataggio dell'esperienza");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <div
            className="d-flex justify-content-between"
            onClick={showExperience}
            type="button"
          >
            <Card.Title>Esperienza</Card.Title>
            <div>
              <i  className="bi bi-plus-lg px-3">
                aggiungi
              </i>
            </div>
          </div>

          <Modal show={modalExperience} onHide={closeExperience}>
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi nuova esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Ruolo ricoperto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il ruolo ricoperto..."
                    value={experience.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Nome azienda</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il nome dell'azienda..."
                    value={experience.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Descrizione</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci la descrizione del lavoro svolto..."
                    value={experience.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Località</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci la località..."
                    value={experience.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Data di inizio</Form.Label>
                  <Form.Control
                    type="date"
                    value={experience.startDate}
                    onChange={(e) =>
                      handleInputChange("startDate", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Data di fine</Form.Label>
                  <Form.Control
                    type="date"
                    value={experience.endDate}
                    onChange={(e) =>
                      handleInputChange(
                        "endDate",
                        e.target.value || "ancora in corso"
                      )
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                  closeExperience();
                }}
              >
                Aggiungi esperienza
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddExperienceModal;
