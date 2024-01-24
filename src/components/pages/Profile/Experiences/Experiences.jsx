import React, { useState, useEffect } from "react"
import { Pencil, PlusLg, CalendarDate } from "react-bootstrap-icons"
import styles from "./Experiences.module.css"
import AddExperienceModal from "./AddExperiencesModal"
import EditExperienceModal from "./EditExperienceModal"

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
} from "react-bootstrap"


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

  const handleEditModalClose = () => {
    setEditModalShow(false);
  };

  const userId = "65ae435b600be100183a86a0";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDM1YjYwMGJlMTAwMTgzYTg2YTAiLCJpYXQiOjE3MDU5MTkzMjQsImV4cCI6MTcwNzEyODkyNH0.ChId8_RqSdZkU4BzmkPO02cbeBsGdJn1mPzOwBHev0E";

  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


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
        // Gestisci la risposta se necessario
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
        // Rimuovi l'esperienza dalla lista dopo la cancellazione
        setExperiences((prevExperiences) =>
          prevExperiences.filter((experience) => experience._id !== experienceId)
        );
      } else {
        console.error("Errore durante la cancellazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore durante la richiesta DELETE:", error);
    }
  };


  return (
    <div className="border rounded bg-white p-2">
      <div className={styles.header}></div>
      <Dropdown>
        <div className="d-flex justify-content-between">
          <p className={styles.experienceText}>Esperienza</p>

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
            <img src="url_dell_immagine" alt="Esperienza" />
            <div className={styles.text}>
              <p>{experience.role}</p>
              <p>{experience.description}</p>
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
            variant="danger"
            onClick={() => handleDeleteExperience(experience._id)}
            >
            Cancella Esperienza
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
    </>
  );
};

export default Experiences;

