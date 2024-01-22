import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

function Profile() {
  return (
    <>
      <p>ciao sono profilo</p>
      <Header />
      <Link to="/">vai alla home</Link>
    </>
  );
}

export default Profile;
