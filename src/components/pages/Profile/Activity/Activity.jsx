import { Pencil, ArrowRight } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import "./Activity.css";

const Activity = () => {
  return (
    <Container fluid className="border rounded section">
      <div className="border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3>Attivitá</h3>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button className="outlined-button">Crea un post</button>
            <Pencil type="button"/>
          </div>
        </div>
        <small className="text-primary">0 follower</small>

        <div>
          <p className="m-0">Non hai ancora pubblicato nulla</p>
          <p>I post che condividi appariranno qui</p>
        </div>
      </div>
      <div className="showAll">
        <h5>Show all Activities</h5>
        <ArrowRight className="align-items-center" />
      </div>
    </Container>
  );
};

export default Activity;
