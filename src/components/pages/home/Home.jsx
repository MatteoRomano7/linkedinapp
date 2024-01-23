import { Link } from "react-router-dom";
import Hiring from "../hiring/Hiring";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/pepe">vai al profilo</Link>
      
      <Hiring />
    </>
  )
}

export default Home
