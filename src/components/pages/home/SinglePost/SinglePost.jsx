import Card from "react-bootstrap/Card";
import Comments from "../Comments";
import PostEdit from "../PostEdit";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BiCommentDetail, BiShare, BiEdit } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import CommentArea from "../CommentArea/CommentArea";

function SinglePost({ post, postArray, setPostArray }) {
  const [comments, setComments] = useState([]);
  const [commentShow, setCommentShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch()


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
        dispatch({type: "FETCH_POSTS", payload: newPostArray})
        
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
    <Card style={{ margin: "1rem 0" }}>
      <Card.Img
        variant="top"
        src={post?.user?.image}
        alt="foto"
        className="fotoTonde ms-2"
      />
      <Card.Body>
        <Card.Title>{post?.username} said:</Card.Title>
        <Card.Text>{post?.text}</Card.Text>
        {post?.image && (
          <Card.Img variant="bottom" src={post?.image} alt="fotopost" />
        )}
      </Card.Body>
      <hr className="my-1" />
      <Row className="text-muted post-actions justify-content-center">
        <Col
          xs="2"
          className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
        >
          <div className="mb-0 ml-2 text-primary">
            <FiThumbsUp /> Like
          </div>
        </Col>
        <Col
          xs="2"
          className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
        >
          <div
            className="mb-0 ml-2"
            onClick={() => setCommentShow(true)}
            style={{ cursor: "pointer" }}
          >
            <BiCommentDetail /> Comment
          </div>
        </Col>
        <Col
          xs="2"
          className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
        >
          <div className="mb-0 ml-2">
            <BiShare /> Share
          </div>
        </Col>
        {user._id === post.user._id && (
          <>
            <Col
              xs="2"
              className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
            >
              <div className="mb-0 ml-2">
                <FaTimes
                  className="text-danger"
                  onClick={() => deletePost(post._id)}
                  style={{ cursor: "pointer" }}
                />
                Delete
              </div>
            </Col>
            <Col
              xs="2"
              className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
            >
              <div
                className="mb-0 ml-2"
                // onClick={() => handleShowPostEdit(post._id, post.text)}
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
      <CommentArea post={post}/>
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
      {commentShow && (
        <Comments
          onHide={setCommentShow}
          setComments={setComments}
          comments={comments}
          open={commentShow}
          id={post._id}
        />
      )}
    </Card>
  );
}

export default SinglePost;
