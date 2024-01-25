import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Dropdown } from "react-bootstrap"
import "./MiniFooter.css"

const MiniFooter = () => {
  return (
    <>
      <div className="d-flex  justify-content-center mt-5">
        <a className="mx-2">Informazioni</a>
        <a className="mx-2">Accessibilità</a>
      </div>

      <div className="d-flex  justify-content-center">
        <a className="mt-2">Centro assistenza</a>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="privacyDropdown2"
              className="miniFooterDropdown"
            >
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" className="miniFooterDropdown">
                Informativa sulla Privacy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="miniFooterDropdown">
                Termini e Condizioni
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a className="mx-2">Opzioni per gli annunci</a>
      </div>

      <div className="d-flex justify-content-center">
        <a className="mt-2">Pubblicità</a>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="privacyDropdown2"
              className="miniFooterDropdown"
            >
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" className="miniFooterDropdown">
                Informativa sulla Privacy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="miniFooterDropdown">
                Termini e Condizioni
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a className="mx-2">Scarica l'app Linkedin</a>
        <a className="">Altro</a>
      </div>

      <div className="d-flex justify-content-center mt-3 signatureLogo ">
        <div className="">
          <img src={"img/linkedin_logo_footer.png"} alt="LinkedIn Logo" />
        </div>
        <address className="FooterGrassseto mt-1">
          LinkedIn Corporation &copy; 2024
        </address>
      </div>
    </>
  )
}

export default MiniFooter
