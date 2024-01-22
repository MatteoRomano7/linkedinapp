import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/me">vai al profilo</Link>
    </>
  );
}

export default Home;
