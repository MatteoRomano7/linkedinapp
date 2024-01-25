import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/actions/index";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare, BiEdit } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import PostEdit from "./PostEdit";
import Comments from "./Comments";
import SinglePost from "./SinglePost/SinglePost";

function Post() {
  const dispatch = useDispatch();
  const authenticatedUserId = useSelector((state) => state.profile?._id);
  const [comments, setComments] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [showed, setShowed] = useState(5);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showPostEdit, setShowPostEdit] = useState(false);
  const [editedPostText, setEditedPostText] = useState("");
  const [selectedCommentPostId, setSelectedCommentPostId] = useState(null);
  const [selectedEditPostId, setSelectedEditPostId] = useState(null);

  let posts = useSelector(state => state.posts)
  let weh = posts.slice(0, showed)

  useEffect(() => {
    weh = posts.slice(0, showed)
  }, [posts])


  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

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
          dispatch({type: "FETCH_POSTS", payload: sortedPosts})
          // setPosts(sortedPosts);
        } else {
          console.log("Error fetching posts");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleShowComments = (postId) => {
    setSelectedCommentPostId(postId);
  };

  const handleCloseComments = () => {
    setSelectedCommentPostId(null);
  };

  const handleShowPostEdit = (postId, postText) => {
    setSelectedEditPostId(postId);
    setEditedPostText(postText);
    setShowPostEdit(true);
  };

  const handleClosePostEdit = () => {
    setSelectedPostId(null);
    setEditedPostText("");
    setShowPostEdit(false);
  };

  // const handlePostEdit = (updatedText) => {
  //   const updatedPosts = posts.map((post) =>
  //     post._id === selectedPostId ? { ...post, text: updatedText } : post
  //   );
  //   setPosts(updatedPosts);
  //   handleClosePostEdit();
  // };

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
          {weh.map((post) => {
            return <SinglePost key={post._id} id={post._id} post={post} postArray={posts} setPostArray={"setPosts"}/>;
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
