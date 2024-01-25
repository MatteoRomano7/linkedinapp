import { Modal, Button, Col, Row, Container, Card } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { Link  } from "react-router-dom";

const ModalNav = () => {
  const profileStore = useSelector(state => state.profile);
  
  return (
    <>
      <Modal.Dialog>
        <Row>
          <Container className="d-flex justify-content-around">
            <Col>
              <Modal.Header>
                <Row>
                  <Col>
                    <Card.Img variant="top" src={profileStore?.image} alt="foto" className="fotoTonde me-2" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Modal.Title>
                      <h4 className="name mb-0">
                        {profileStore.name} {profileStore.surname}
                      </h4>
                    </Modal.Title>
                  </Col>
                </Row>
              </Modal.Header>
              <Modal.Body>
                <p className="my-0">{profileStore.title}</p>
                <p className="my-0 text-muted">{profileStore.area}</p>
                <Link to="/profile/me">
                  <Button className="m-2 outlined-button">Visualizza profilo</Button>
                </Link>
              </Modal.Body>
            </Col>
          </Container>
        </Row>

        <Modal.Footer>
          <Row>
            <Col>
              <h4>Account</h4>
              <Link to="#" className="LinkModale">
                Impostazioni e privacy
              </Link>
              <br />
              <Link to="#" className="LinkModale">
                Guida
              </Link>
              <br />
              <Link to="#" className="LinkModale">
                Lingua
              </Link>
            </Col>

            <Col>
              <h4>Gestisci</h4>
              <Link to="#" className="LinkModale">
                Post e attività
              </Link>
              <br />
              <Link to="#" className="LinkModale">
                Account per la pubblicizzazione
              </Link>
              <br />
              <Link to="#" className="LinkModale">
                Esci
              </Link>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default ModalNav;
