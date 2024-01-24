import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown } from 'react-bootstrap';
import './MiniFooter.css'


const MiniFooter = () => {
  return (
    <>
    
      <div className="d-flex  justify-content-center">
        <div className="mx-2">Informazioni</div>
        <div className="">Accessibilità</div>
      </div>

      <div className="d-flex  justify-content-center">
        <div className="mt-2">Centro assistenza</div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="white" id="privacyDropdown2" className="btn-white">
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu className="bingo">
              <Dropdown.Item href="#">Informativa sulla Privacy</Dropdown.Item>
              <Dropdown.Item href="#">Termini e Condizioni</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="">
          Opzioni per gli annunci
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="mt-2">Pubblicità</div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="white" id="privacyDropdown2" className="bingo">
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu className="bingo">
              <Dropdown.Item href="#">Informativa sulla Privacy</Dropdown.Item>
              <Dropdown.Item href="#">Termini e Condizioni</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="mx-2">Scarica l'app Linkedin</div>
        <div className="">Altro</div>
      </div>

      <div className="d-flex justify-content-center mt-3 ">
        <div className=""><img src={"img/linkedin_logo_footer.png"} alt="LinkedIn Logo" /></div>
        <div className="FooterGrassseto mt-1">LinkedIn Corporation &copy; 2024</div>
      </div>
     
    </>
  );
};

export default MiniFooter;
