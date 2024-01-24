import React, { useState, useEffect } from "react"
import { Pencil, PlusLg, CalendarDate } from "react-bootstrap-icons"
import styles from "./Experiences.module.css"
import AddExperienceModal from "./AddExperiencesModal"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap"

const Experiences = () => {
  const [showModal, setShowModal] = useState(false)
  const [experiences, setExperiences] = useState([])
  const userId = "65ae4145600be100183a869e"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDE0NTYwMGJlMTAwMTgzYTg2OWUiLCJpYXQiOjE3MDU5MTg3ODksImV4cCI6MTcwNzEyODM4OX0.zelRRJYDxN7z_QvRue4bD_OyrWO_ZqTIeG82ZGAzpAo"
  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  })

  const options = {
    method: "GET",
    headers: headers,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        setExperiences(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, []) // Empty dependency array means this effect runs once after the initial render

  const handleAddPosition = () => {
    setShowModal(true)
  }

  const handleAddBreak = () => {
    console.log("Aggiungi pausa lavorativa")
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
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
          <div key={experience._id} className={styles.content}>
            <img src="url_dell_immagine" alt="Esperienza" />
            <div className={styles.text}>
              <p>{experience.role}</p>
              <p>{experience.description}</p>
            </div>
            <Pencil className={styles.pencilIcon} />
          </div>
        ))}

        {showModal && (
          <AddExperienceModal
            isOpen={showModal}
            onRequestClose={() => closeModal()}
          />
        )}
      </Dropdown>
    </>
  )
}

export default Experiences
