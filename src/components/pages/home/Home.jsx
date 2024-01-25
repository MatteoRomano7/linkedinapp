import React, { useState } from "react";
import LinkedinNews from "./LinkedinNews";
import NewPost from "./NewPost";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/actions";
import { useEffect } from "react";
import ProfileDetails from "./ProfileDetails";
import LinkGroup from "./LinkGroup";
import { Container } from "react-bootstrap";
import "./Home.css";

import MiniFooter from "../../MiniFooter/MiniFooter";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <Container className="home-wrapper">
      <div className="home-sidebar-left">
        <ProfileDetails />
        <LinkGroup />
      </div>
      <main>
        <NewPost />
        <Post />
      </main>
      <div>
        <LinkedinNews />
        <MiniFooter />
      </div>

    </Container>
  );
}

export default Home;
