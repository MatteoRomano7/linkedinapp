import React, { useState, useEffect } from "react";
import { Pencil, PlusLg, CalendarDate } from "react-bootstrap-icons";
import styles from "./Experiences.module.css";
import AddExperienceModal from "./AddExperiencesModal";
import EditExperienceModal from "./EditExperienceModal";
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
} from "react-bootstrap";
import { Buildings } from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";

const Experiences = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [editExperience, setEditExperience] = useState({
    role: "",
    company: "",
    description: "",
    area: "",
    startDate: "",
    endDate: "",
  });
  const [editExperienceId, setEditExperienceId] = useState("");
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const userToken = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user);

  const handleEditModalClose = () => {
    setEditModalShow(false);
  };

  function dateConverter(daate) {
    const date2 = new Date(daate);
    return date2.toISOString().substring(0, 10);
  }

  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const headers = new Headers({
    Authorization: `Bearer ${userToken}`,
    "Content-Type": "application/json",
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userToken, userId]);

  const handleAddPosition = () => {
    setShowModal(true);
  };

  const handleAddBreak = () => {
    console.log("Aggiungi pausa lavorativa");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEditSubmit = async (updatedExperience, experienceId) => {
    try {
      const editUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;
      const editOptions = {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(updatedExperience),
      };

      const response = await fetch(editUrl, editOptions);
      if (response.ok) {
      } else {
        console.error("Errore durante la modifica dell'esperienza");
      }
    } catch (error) {
      console.error("Errore durante la richiesta PUT:", error);
    }
  };

  const handleDeleteExperience = async (experienceId) => {
    try {
      const deleteUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;
      const deleteOptions = {
        method: "DELETE",
        headers: headers,
      };

      const response = await fetch(deleteUrl, deleteOptions);
      if (response.ok) {
        setExperiences((prevExperiences) =>
          prevExperiences.filter(
            (experience) => experience._id !== experienceId
          )
        );
      } else {
        console.error("Errore durante la cancellazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore durante la richiesta DELETE:", error);
    }
  };

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  return (
    <div className="border rounded bg-white p-2">
      <div className={styles.header}></div>
      <Dropdown>
        <div className="d-flex justify-content-between">
          <h3 className={styles.experienceText}>Esperienza</h3>

          <DropdownToggle className="bg-transparent border-0">
            <PlusLg size={24} className={`${styles.plusIcon}`} />
          </DropdownToggle>
        </div>
        <DropdownMenu>
          <DropdownItem
            onClick={() => {
              handleAddPosition();
            }}
          >
            <PlusLg className={styles.dropdownIcon} />
            Aggiungi posizione lavorativa
          </DropdownItem>
          <DropdownItem onClick={handleAddBreak}>
            <CalendarDate className={styles.dropdownIcon} />
            Aggiungi pausa lavorativa
          </DropdownItem>
        </DropdownMenu>

        {experiences.map((experience) => (
          <div
            key={experience._id}
            className={`${styles.content} border rounded`}
          >
            <div className="d-flex align-items-center gap-2">
              <Buildings
                size={"50"}
                onClick={() => handleExperienceClick(experience)}
                cursor={"pointer"}
              />
              <div
                className={styles.text}
                onClick={() => handleExperienceClick(experience)}
              >
                <p>{experience.role}</p>
                <p>{experience.description}</p>
              </div>
            </div>
            <Pencil
              className={styles.pencilIcon}
              onClick={() => {
                setEditExperienceId(experience._id);
                setEditExperience({
                  role: experience.role,
                  company: experience.company,
                  description: experience.description,
                  area: experience.area,
                  startDate: experience.startDate,
                  endDate: experience.endDate,
                });
                setEditModalShow(true);
              }}
            />
            <Button
              variant="transparent"
              onClick={() => handleDeleteExperience(experience._id)}
            >
              <Icon.Trash />
            </Button>
          </div>
        ))}

        {editModalShow && (
          <EditExperienceModal
            isOpen={editModalShow}
            onRequestClose={handleEditModalClose}
            experience={editExperience}
            onSubmit={(updatedExperience) =>
              handleEditSubmit(updatedExperience, editExperienceId)
            }
          />
        )}

        {showModal && (
          <AddExperienceModal
            isOpen={showModal}
            onRequestClose={() => closeModal()}
          />
        )}
      </Dropdown>
      {selectedExperience && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Dettagli dell'esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Ruolo:</strong> {selectedExperience.role}
            </p>
            <p>
              <strong>Azienda:</strong> {selectedExperience.company}
            </p>
            <p>
              <strong>Data di inizio:</strong>{" "}
              {dateConverter(selectedExperience.startDate)}
            </p>
            <p>
              <strong>Data di fine:</strong>{" "}
              {dateConverter(selectedExperience.endDate) || "In corso"}
            </p>
            <p>
              <strong>Descrizione:</strong> {selectedExperience.description}
            </p>
            <p>
              <strong>Zona:</strong> {selectedExperience.area}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Experiences;
