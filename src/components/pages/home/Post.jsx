import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost/SinglePost";
import { Row, Col, Button } from "react-bootstrap";

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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
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
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={6} style={{ width: "700px", maxWidth: "100%" }}>
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
