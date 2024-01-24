import { ArrowRight, EyeFill, PeopleFill, Cast } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Resources = () => {
  return (
    <Container fluid className="border rounded section">
      <div>
        <h3>Risorse</h3>

        <p className="onlyYou">
          <EyeFill /> <span>Solo per te</span>
        </p>
      </div>
      <div>
        <div className="profile-highlight">
          <Cast size={24} />
          <div>
            <h5>Modalitá creazione di contenuti</h5>
            <p>
              Fatti scoprire. metti in risalto i contenuti sul tuo profilo e
              accedi agli strumenti di creazione
            </p>
          </div>
          {/* <span>No</span> */}
        </div>
      </div>
        <div className="profile-highlight border-bottom">
          <PeopleFill size={24} />
          <div>
            <h5>La mia rete</h5>
            <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
          </div>
        </div>
      <div className="showAll">
        <h5>Show all resources</h5>
        <ArrowRight />
      </div>
    </Container>
  );
};

export default Resources;
