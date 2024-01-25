import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function PostEdit({ open, close, post, postText }) {
  const [editedText, setEditedText] = useState(postText);

  const updatePost = async (postId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({ text: editedText }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
          },
        }
      );

      if (response.ok) {
        post.text = editedText
        close()
        console.log('PUT fetch')
      } else {
        console.log("Error updating post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={open} onHide={() => close()}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => {e.preventDefault();
        console.log('submit')
        updatePost(post._id)}}>
          <Form.Label>Change the text</Form.Label>
          <Form.Control
            as="textarea"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <Button variant="secondary" onClick={() => close()}>
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default PostEdit;
