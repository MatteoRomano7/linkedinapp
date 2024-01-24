import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function PostEdit({ postId, postText, handleClosePostEdit, handlePostEdit }) {
    const [editedText, setEditedText] = useState(postText);
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        handleClosePostEdit();
    };

    const handleSave = async () => {
        const updatedPost = await updatePost(postId, editedText);
        handlePostEdit(updatedPost);
        handleClose();
    };


    const updatePost = async (postId, newText) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
                method: "PUT",
                body: JSON.stringify({ text: newText }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
                },
            });

            if (response.ok) {
                handlePostEdit(newText);
                handleClosePostEdit();
            } else {
                console.log("Error updating post");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Change the text</h5>
                <Form.Control as="textarea" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PostEdit;
