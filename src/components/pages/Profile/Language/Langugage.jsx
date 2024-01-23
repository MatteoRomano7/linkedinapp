import React from "react";
import { Pencil } from "react-bootstrap-icons";
import styles from "./Langugage.module.css";

const Language = () => {
  return (
    <div className={styles.containerLanguage}>
      <div className={styles.sectionLanguage}>
        <div>
          <p className={styles.sectionTitle}>Lingua del profilo</p>
          <p className={styles.sectionText}>Italiano</p>
        </div>
        <div>
          <Pencil className={styles.sectionIcon} />
        </div>
      </div>
      <div className={styles.sectionTitle2}>
        <div>
          <p className={styles.sectionTitle}>Public Profile</p>
          <p className={styles.sectionText}> https://www.pepe.com/ </p>
        </div>
        <div>
          <Pencil className={styles.sectionIcon} />
        </div>
      </div>
    </div>
  );
};

export default Language;
