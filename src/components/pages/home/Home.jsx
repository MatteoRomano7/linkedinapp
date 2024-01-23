import { Link } from "react-router-dom";
import LinkedinNews from "./LinkedinNews";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/me">vai al profilo</Link>
      <LinkedinNews />
      
    </>
  )
}

export default Home
