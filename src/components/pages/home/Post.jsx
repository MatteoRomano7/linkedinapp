import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/actions/index";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare, BiEdit } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import PostEdit from "./PostEdit";
import Comments from "./Comments";

function Post() {
    const dispatch = useDispatch();
    const authenticatedUserId = useSelector((state) => state.profile?._id);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [showed, setShowed] = useState(5);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [showPostEdit, setShowPostEdit] = useState(false);
    const [editedPostText, setEditedPostText] = useState("");
    const [selectedCommentPostId, setSelectedCommentPostId] = useState(null);
    const [selectedEditPostId, setSelectedEditPostId] = useState(null); 

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
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk"
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    const sortedPosts = data.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                    setPosts(sortedPosts);
                } else {
                    console.log("Error fetching posts");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchPosts();
    }, []);

    const deletePost = async (postId) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk"
                    },
                }
            );

            if (response.ok) {
                alert("Post deleted successfully!");
                const updatedPosts = posts.filter((post) => post._id !== postId);
                setPosts(updatedPosts);
            } else {
                console.log("Error deleting post");
                alert(
                    "Something went wrong. Be sure to check if the post is yours."
                );
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

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

    const handlePostEdit = (updatedText) => {
        const updatedPosts = posts.map((post) =>
            post._id === selectedPostId ? { ...post, text: updatedText } : post
        );
        setPosts(updatedPosts);
        handleClosePostEdit();
    };


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
                    {posts.slice(0, showed).map((post) => (
                        <Card key={post?._id} style={{ margin: "1rem 0" }}>
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
                                    <Card.Img
                                        variant="bottom"
                                        src={post?.image}
                                        alt="fotopost"
                                    />
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
                                        onClick={() => handleShowComments(post._id)}
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
                                    {authenticatedUserId && post.user._id === authenticatedUserId && (
                                        <div>
                                            <FaTimes
                                                className="text-danger ms-3"
                                                onClick={() => deletePost(post._id)}
                                                style={{ cursor: "pointer" }}
                                            /> Delete
                                        </div>
                                    )}
                                </Col>
                                <Col
                                    xs="2"
                                    className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
                                >
                                    {authenticatedUserId && post.user._id === authenticatedUserId && (
                                        <div
                                            className="mb-0 ml-2"
                                            onClick={() => handleShowPostEdit(post._id, post.text)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <BiEdit /> Edit Post
                                        </div>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                {comments.length > 0 && (
                                    <div>
                                        <h4>Comments:</h4>
                                        {comments.map((comment) => (
                                            <div key={comment._id}>
                                                <p>{comment.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Row>
                        </Card>
                    ))}
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
            {selectedEditPostId && showPostEdit && (
                <PostEdit
                    postId={selectedEditPostId}
                    postText={editedPostText}
                    handleClosePostEdit={handleClosePostEdit}
                    handlePostEdit={handlePostEdit}
                />
            )}
            {selectedCommentPostId && (
                <Comments
                    postId={selectedCommentPostId}
                    handleCloseComments={handleCloseComments}
                    setComments={setComments}
                />
            )}
        </div>
    );

}


export default Post;