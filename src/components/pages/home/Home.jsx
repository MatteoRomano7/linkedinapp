import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkedinNews from "./LinkedinNews";
import NewPost from "./NewPost";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/me">vai al profilo</Link>
      <NewPost />
      <LinkedinNews />

    </>
  )
}

export default Home
