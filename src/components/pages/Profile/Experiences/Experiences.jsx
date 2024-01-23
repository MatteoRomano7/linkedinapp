import React, { useState } from "react"
import { Pencil, PlusLg, CalendarDate } from "react-bootstrap-icons"
import styles from "./Experiences.module.css"
import AddExperienceModal from "./AddExperiencesModal"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap"
import { useEffect } from "react"

const Experiences = ({}) => {
  const [showModal, setShowModal] = useState(false)
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDM1YjYwMGJlMTAwMTgzYTg2YTAiLCJpYXQiOjE3MDU5MTkzMjQsImV4cCI6MTcwNzEyODkyNH0.ChId8_RqSdZkU4BzmkPO02cbeBsGdJn1mPzOwBHev0E'

  const userId = "65ae435b600be100183a86a0" 

  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  const options = {method: 'GET', 
    headers: headers,}


  const fetchExperiences = async () => {
    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        throw new Error (`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setExperiences(data);
      setIsLoading(false);    
    } catch (error) {
      console.error("Errore durante la richiesta GET:", error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleAddPosition = () => {
    setShowModal(true)
    console.log("Aggiungi posizione lavorativa")
  }

  const handleAddBreak = () => {
    console.log("Aggiungi pausa lavorativa")
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {experiences &&(
      experiences.map((expe, i) =>
      <div key={i}>
        <div className={styles.header}>
          <p className={styles.experienceText}>Esperienza</p>
        </div>
        <Dropdown>
          <DropdownToggle className="bg-transparent border-0 ">
            <PlusLg className={styles.plusIcon} />
          </DropdownToggle>
  
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                handleAddPosition()
                console.log("pepe")
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
  
          <div className={styles.content}>
            <img src="url_dell_immagine" alt="Esperienza" />
            <div className={styles.text}>
              <p className="nomeLavoro">{expe.role}</p>
              <p className="descrizioneLavoro">{expe.company}</p>
            </div>
            <Pencil className={styles.pencilIcon} />
          </div>
  
          {showModal && (
            <AddExperienceModal
              isOpen={showModal}
              onRequestClose={() => closeModal()}
            />
          )}
        </Dropdown>
      </div>
   ))}
   </>
 );
}


export default Experiences