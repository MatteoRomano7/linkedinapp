import Card from "react-bootstrap/Card";
import Comments from "../Comments";
import PostEdit from "../PostEdit";
import "./SinglePost.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BiCommentDetail, BiShare, BiEdit } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import CommentArea from "../CommentArea/CommentArea";

function SinglePost({ post, postArray }) {
  const [comments, setComments] = useState([]);
  const [editShow, setEditShow] = useState(false);
  const [commentArea, setCommentArea] = useState(false);

  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
          },
        }
      );

      if (response.ok) {
        const newPostArray = postArray.toSpliced(
          postArray.findIndex((elem) => elem._id === postId),
          1
        );
        dispatch({ type: "FETCH_POSTS", payload: newPostArray });

        // setPostArray(newPostArray);
      } else {
        console.log("Error deleting post");
        alert("Something went wrong. Be sure to check if the post is yours.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Card style={{ margin: "1rem 0" }}>
        <div className="post-text">
          <div>
            <Card.Img
              variant="top"
              src={post?.user?.image}
              alt="foto"
              className="fotoTonda"
            />
          </div>
          <div>
            <Card.Title>{post?.username} said:</Card.Title>
            <Card.Text>{post?.text}</Card.Text>
          </div>
        </div>
        <Card.Body>
          {post?.image && (
            <div className="text-center">
              <Card.Img
                variant="bottom"
                src={post?.image}
                alt="fotopost"
                className="post-image"
              />
            </div>
          )}
        </Card.Body>
        <hr className="my-1" />
        <Row className="text-muted post-actions justify-content-center">
          <Col
            xs="2"
            className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
          >
            <div className="mb-0 ml-2 text-primary pointer">
              <FiThumbsUp /> Like
            </div>
          </Col>
          <Col
            xs="2"
            className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
          >
            <div
              className="mb-0 ml-2 pointer"
              // onClick={() => setCommentArea(!commentArea)}
              // onClick={() => setCommentShow(true)}
              onClick={() => setCommentArea(!commentArea)}
            >
              <BiCommentDetail /> Comment
            </div>
          </Col>
          <Col
            xs="2"
            className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
          >
            <div className="mb-0 ml-2 pointer">
              <BiShare /> Share
            </div>
          </Col>
          {user._id === post.user._id && (
            <>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
              >
                <div
                  className="mb-0 ml-2 pointer"
                  onClick={() => deletePost(post._id)}
                >
                  <FaTimes className="text-danger " />
                  Delete
                </div>
              </Col>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
              >
                <div
                  className="mb-0 ml-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditShow(true)}
                >
                  <BiEdit /> Edit Post
                </div>
                {editShow && (
                  <PostEdit
                    open={editShow}
                    close={() => setEditShow(false)}
                    post={post}
                  />
                )}
              </Col>
            </>
          )}
        </Row>
        <Row>
          {comments.length > 0 && (
            <div>
              <h4>Comments:</h4>
              {comments.map((comment) => (
                <div key={comment.key}>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          )}
        </Row>
        {/* {commentShow && <Comments />} */}
      </Card>
      <Row>
        {commentArea && (
          <CommentArea
            post={post}
            id={post._id}
            setCommentData={setComments}
            commentData={comments}
          />
        )}
      </Row>
    </>
  );
}

export default SinglePost;
