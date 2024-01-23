<<<<<<< HEAD
import React, { useState } from 'react';
import { Pencil, PlusLg, CalendarDate } from 'react-bootstrap-icons';
import styles from './Experiences.module.css';
import AddExperienceModal from './AddExperiencesModal';
import  Dropdown  from 'react-bootstrap/Dropdown';
=======
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
>>>>>>> 7f10ffae6d52dd300adf005043b0fbbdb147a8e9

const Experiences = () => {
  const [showModal, setShowModal] = useState(false)

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
      <div className={styles.header}>
        <p className={styles.experienceText}>Esperienza</p>
      </div>
<<<<<<< HEAD
      {showDropdown && (
        <Dropdown.Menu className={styles.dropdownContainer}>
          <Dropdown.Item className={styles.dropdown1} onClick={handleAddPosition}>
            <PlusLg className={styles.dropdownIcon} />
            Aggiungi posizione lavorativa
          </Dropdown.Item>
          <Dropdown.Item className={styles.dropdown} onClick={handleAddBreak}>
            <CalendarDate className={styles.dropdownIcon} />
            Aggiungi pausa lavorativa
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
      <div className={styles.content}>
        <img src="url_dell_immagine" alt="Esperienza" />
        <div className={styles.text}>
          <p>NOME LAVORO</p>
          <p>Altre informazioni sul lavoro</p>
        </div>
        <Pencil className={styles.pencilIcon} />
      </div>
=======
      <Dropdown>
        <DropdownToggle className="bg-transparent border-0 ">
          <PlusLg className={styles.plusIcon} />
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={handleAddPosition}>
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
            <p>NOME LAVORO</p>
            <p>Altre informazioni sul lavoro</p>
          </div>
          <Pencil className={styles.pencilIcon} />
        </div>
>>>>>>> 7f10ffae6d52dd300adf005043b0fbbdb147a8e9

        {showModal && (
          <AddExperienceModal isOpen={showModal} onRequestClose={closeModal} />
        )}
      </Dropdown>
    </>
  )
}

export default Experiences

