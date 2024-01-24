import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkedinNews from "./LinkedinNews";
import NewPost from "./NewPost";
import Hiring from "../hiring/Hiring";

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/me">vai al profilo</Link>
      <NewPost />
      <LinkedinNews />
      <Hiring />

    </>
  )
}

export default Home
