import { ArrowRight, EyeFill, PeopleFill, Cast} from "react-bootstrap-icons";

const Resources = () => {
    return(
        <div>
            <div>
            <h2>Risorse</h2>
            <EyeFill /> <span>Solo per te</span>
            </div>
            <div>
                <div className="d-flex">
            <Cast /> <h3>Modalitá creazione di contenuti</h3><span>No</span>
            </div>
            <p>Fatti scoprire. metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
            </div>
            <div>
                <div className="d-flex">
                <PeopleFill /> <h3>La mia rete</h3> 
                </div>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
            </div>
            <div className="d-flex justify-content-center">
            <h2>Show all analytics</h2> <ArrowRight className="aling-items-center m-2" />
            </div>
        </div>

    )
}

export default Resources;