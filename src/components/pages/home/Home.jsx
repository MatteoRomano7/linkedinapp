import { Link } from "react-router-dom";
import Hiring from "../hiring/Hiring";
import LinkedinNews from "./LinkedinNews";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/pepe">vai al profilo</Link>
    </>
  )
}

export default Home
