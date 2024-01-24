import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkedinNews from "./LinkedinNews";
import NewPost from "./NewPost";
import Post from "./Post";
import Hiring from "../hiring/Hiring";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/actions";
import { useEffect } from "react";
import ProfileDetails from "./ProfileDetails";
import LinkGroup from "./LinkGroup";





function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
    console.log("fetch");
  }, []);


  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/me">vai al profilo</Link>
      <NewPost />
      <Post />

      <LinkedinNews />
      <Hiring />
      <ProfileDetails />
      <LinkGroup />

    </>
  )
}

export default Home
