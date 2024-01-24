import React, { useState } from "react";
import { Button, Form, Modal, Container, Row } from "react-bootstrap";

function Comments({ postId, handleCloseComments, setComments }) {
  const [newComment, setNewComment] = useState({ comment: "", rate: 2, elementId: postId });

 const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
        },
      });
  
      if (response.ok) {
        const newCommentData = await response.json();
        setComments((prevComments) => [...prevComments, newCommentData]);
        alert("Comment was sent to the shadow realm!");
        handleCloseComments();
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Modal show={true} onHide={handleCloseComments}>
      {/* Modal per la gestione dei commenti */}
      <Modal.Header closeButton>
        <span>Comments</span>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {/* Box per inserire il testo del nuovo commento */}
            <Form onSubmit={postComment}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={5}
                  style={{
                    border: "transparent",
                    width: "46vh",
                    marginBottom: "5px",
                  }}
                  value={newComment.comment}
                  onChange={(e) =>
                    setNewComment({
                      ...newComment,
                      comment: e.currentTarget.value,
                    })
                  }
                />
              </Form.Group>
              <div className="d-flex">
                {/* Pulsante per pubblicare il commento */}
                <Button variant="outline-success" type="submit">
                  Pubblica
                </Button>
              </div>
            </Form>
          </Row>
        </Container>
      </Modal.Body>
      {/* Pulsante chiudi */}
      <Button
        variant="outline-danger"
        className="mx-5 mb-2"
        onClick={handleCloseComments}
      >
        Chiudi
      </Button>
    </Modal>
  );
}

export default Comments;
