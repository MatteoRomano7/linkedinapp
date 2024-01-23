import { ArrowRight, EyeFill, PeopleFill, Cast } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Resources = () => {
  return (
    <Container fluid className="border rounded">
      <div>
        <h2>Risorse</h2>

        <p className="onlyYou">
          <EyeFill /> <span>Solo per te</span>
        </p>
      </div>
      <div>
        <div className="profile-highlight">
          <Cast size={24} />
          <div>
            <h3>Modalitá creazione di contenuti</h3>
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
            <h3>La mia rete</h3>
            <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
          </div>
        </div>
      <div className="d-flex justify-content-center py-1">
        <h4>Show all resources</h4>
        <ArrowRight className="aling-items-center m-2" />
      </div>
    </Container>
  );
};

export default Resources;
