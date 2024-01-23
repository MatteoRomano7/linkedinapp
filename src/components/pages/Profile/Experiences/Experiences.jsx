import React, { useState } from 'react';
import { Pencil, PlusLg, CalendarDate } from 'react-bootstrap-icons';
import styles from './Experiences.module.css';
import AddExperienceModal from './AddExperiencesModal';

const Experiences = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddPosition = () => {
    setShowModal(true);
    console.log('Aggiungi posizione lavorativa');
  };

  const handleAddBreak = () => {
    console.log('Aggiungi pausa lavorativa');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.header}>
        <p className={styles.experienceText}>Esperienza</p>
        <PlusLg className={styles.plusIcon} onClick={handleDropdownToggle} />
      </div>
      {showDropdown && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdown1} onClick={handleAddPosition}>
            <PlusLg className={styles.dropdownIcon} />
            Aggiungi posizione lavorativa
          </div>
          <div className={styles.dropdown} onClick={handleAddBreak}>
            <CalendarDate className={styles.dropdownIcon} />
            Aggiungi pausa lavorativa
          </div>
        </div>
      )}
      <div className={styles.content}>
        <img src="url_dell_immagine" alt="Esperienza" />
        <div className={styles.text}>
          <p>NOME LAVORO</p>
          <p>Altre informazioni sul lavoro</p>
        </div>
        <Pencil className={styles.pencilIcon} />
      </div>

      {showModal && (
        <AddExperienceModal
          isOpen={showModal}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default Experiences;