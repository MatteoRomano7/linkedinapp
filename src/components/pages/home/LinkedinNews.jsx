import { InfoSquareFill } from "react-bootstrap-icons";
import { ArrowDown } from "react-bootstrap-icons";
import { Link } from "react-bootstrap-icons";
import Hiring from "../hiring/Hiring";

const LinkedinNews = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>LinkedIn Notizie</h2>
                <InfoSquareFill />
            </div>
            <div>
                <ul className="m-2">
                    <li>I 15 lavori in piú rapida crescita in italia</li>
                    <span>Notizi principali </span>
                    <li>Cercare lavoro nella tecnologia</li>
                    <span> 20 ore fa</span>
                    <li>SONDAGGIO: cosa valuti di piú in un'offerta?</li>
                    <span>2 ore fa</span>
                    <li>Un pomodoro per lo spazio</li>
                    <span>3 giorni fa</span>
                    <li>Le cittá dei lavori in crescita</li>
                    <span>1 giorno fa</span>
                </ul>
            </div>
            <div className="d-flex justify-content-center">
                <h2>Show more</h2> <ArrowDown className="aling-items-center m-2" />
            </div>
            <Hiring>
            <Link to='/Job' />
            </Hiring>

        </div>
    )
};

export default LinkedinNews;