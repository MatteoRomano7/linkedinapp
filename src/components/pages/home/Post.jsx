import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost/SinglePost";
import { Row, Col, Button } from "react-bootstrap";
import "./Post.css"

function Post() {
  const dispatch = useDispatch();
  const [showed, setShowed] = useState(5);

  let posts = useSelector((state) => state.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts",
          {
            headers: {
              Authorization:
                `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const sortedPosts = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          dispatch({ type: "FETCH_POSTS", payload: sortedPosts });
        } else {
          console.log("Error fetching posts");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPosts();
  }, []);

  const showMore = () => {
    setShowed((prevValue) => prevValue + 5);
  };

  const showLess = () => {
    if (showed !== 5) {
      setShowed((prevValue) => prevValue - 5);
    }
  };

  return (
    <div className="home-center-elem">
      <Row className="d-flex justify-content-center">
        <Col>
          {posts.slice(0, showed).map((post) => {
            return (
              <SinglePost
                key={post._id}
                id={post._id}
                post={post}
                postArray={posts}
                setPostArray={"setPosts"}
              />
            );
          })}
        </Col>
      </Row>
      <div className="d-flex justify-content-around me-3 mt-4">
        <Button onClick={showMore}>Show more</Button>
        {showed !== 5 && (
          <Button variant="danger" onClick={showLess}>
            Show less
          </Button>
        )}
      </div>
    </div>
  );
}

export default Post;
