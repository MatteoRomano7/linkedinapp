import React from "react"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"

const AddExperienceModal = ({ isOpen, onRequestClose }) => {
  const [qualifica, setQualifica] = useState("")
  const [tipoImpiego, setTipoImpiego] = useState("")
  const [nomeAzienda, setNomeAzienda] = useState("")
  const [localita, setLocalita] = useState("")
  const [inizioMese, setInizioMese] = useState("")
  const [inizioAnno, setInizioAnno] = useState("")
  const [fineMese, setFineMese] = useState("")
  const [fineAnno, setFineAnno] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) {
      console.log("Dati salvati:", {
        qualifica,
        tipoImpiego,
        nomeAzienda,
        localita,
        inizioMese,
        inizioAnno,
        fineMese,
        fineAnno,
      })

      onRequestClose()
    } else {
      e.stopPropagation()
    }
  }

  return (
    <div>
      <Modal show={isOpen} onHide={onRequestClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate onSubmit={handleSave}>
            <Form.Group>
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                value={qualifica}
                onChange={(e) => setQualifica(e.target.value)}
                required={true}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo di Impiego</Form.Label>
              <Form.Control
                as="select"
                value={tipoImpiego}
                onChange={(e) => setTipoImpiego(e.target.value)}
              >
                <option value="">Seleziona...</option>
                <option value="tempo_pieno">A Tempo Pieno</option>
                <option value="part_time">Part Time</option>
                <option value="autonomo">Autonomo</option>
                <option value="freelance">Freelance</option>
                <option value="contratto">A Contratto</option>
                <option value="stage">Stage</option>
                <option value="apprendistato">Apprendistato</option>
                <option value="stagionale">Stagionale</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nome Azienda</Form.Label>
              <Form.Control
                type="text"
                value={nomeAzienda}
                onChange={(e) => setNomeAzienda(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                value={localita}
                onChange={(e) => setLocalita(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label>Data di Inizio</Form.Label>
                <Form.Control
                  as="select"
                  value={inizioMese}
                  onChange={(e) => setInizioMese(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  as="select"
                  value={inizioAnno}
                  onChange={(e) => setInizioAnno(e.target.value)}
                  input type=""
                ></Form.Control>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Data di Fine</Form.Label>
                <Form.Control
                  as="select"
                  value={fineMese}
                  onChange={(e) => setFineMese(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  as="select"
                  value={fineAnno}
                  onChange={(e) => setFineAnno(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onRequestClose}>
            Chiudi
          </Button>
          <Button variant="primary" type="submit">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddExperienceModal
