import { InfoSquareFill } from "react-bootstrap-icons"
import { ArrowDown } from "react-bootstrap-icons"
import { Link } from "react-bootstrap-icons"
import Hiring from "../hiring/Hiring"
import "./LinkedinNews.css"

const LinkedinNews = () => {
  return (
    <div className="newsContainer">
      <div className="d-flex justify-content-between">
        <h2 className="newsHeader">LinkedIn Notizie</h2>
        <InfoSquareFill />
      </div>
      <div>
        <ul className="m-2">
          <li>
            <h3 className="articleTitle">
              I 15 lavori in piú rapida crescita in italia
            </h3>
            <p className="newsDetail">Notizie principali </p>
          </li>
          <li>
            <h3 className="articleTitle">Cercare lavoro nella tecnologia</h3>
            <p className="newsDetail"> 20 ore fa</p>
          </li>
          <li>
            <h3 className="articleTitle">
              SONDAGGIO: cosa valuti di piú in un'offerta?
            </h3>
            <p className="newsDetail">2 ore fa</p>
          </li>
          <li>
            <h3 className="articleTitle">Un pomodoro per lo spazio</h3>
            <p className="newsDetail">3 giorni fa</p>
          </li>
          <li>
            <h3 className="articleTitle">Le cittá dei lavori in crescita</h3>
            <p className="newsDetail">1 giorno fa</p>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-start px-5 ">
        <h2 className="showMore">Show more</h2>{" "}
        <ArrowDown className="aling-items-center m-2" />
      </div>
    </div>
  )
}

export default LinkedinNews
