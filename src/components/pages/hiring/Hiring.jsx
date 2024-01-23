import React from 'react';
import styles from "./Hiring.module.css";

const Hiring = () => {
    return (
        <div className={styles.containerHiring}>
            <a 
            href='https://www.linkedin.com/jobs/?trk=li_FA_global_careers_jobsgtm_jsFA_v1&mcid=6899045044465016833'
            target="_blank"
            >                
            <img className={styles.containerHiring} src="/hiring_image.png" alt="hiring image" />
            </a>
         </div >  
    )
};

export default Hiring;