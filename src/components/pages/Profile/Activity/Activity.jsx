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
          <div>
            <button className="outlined-button">Crea un post</button>
            <Pencil />
          </div>
        </div>
        <small className="text-primary">0 follower</small>

        <div>
          <p className="m-0">Non hai ancora pubblicato nulla</p>
          <p>I post che condividi appariranno qui</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4>Show all Activities</h4>
        <ArrowRight className="align-items-center m-2" />
      </div>
    </Container>
  );
};

export default Activity;
