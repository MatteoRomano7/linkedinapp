import React, { useState } from "react";
import { Button, Form, Modal, Container, Row } from "react-bootstrap";

function Comments({ comments, open, onHide, id, setComments }) {
  const [commentText, setCommentText] = useState("");

  const postComment = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: commentText,
      rate: 3,
      elementId: id,
    };
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        Object.assign(newComment, { ...newComment, key: data._id, author: data.author });
        setComments([...comments, newComment]);
        onHide()
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={open} onHide={() => onHide(false)}>
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
                <Form.Label>Scrivi il tuo commento:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </Form.Group>
              <hr />
              {/* Pulsante per pubblicare il commento */}
              <div className="text-center">
                <Button
                  variant="outline-success"
                  type="submit"
                  style={{ width: "160px" }}
                >
                  Pubblica
                </Button>
              </div>{" "}
            </Form>
          </Row>
        </Container>
      </Modal.Body>
      {/* Pulsante chiudi */}
    </Modal>
  );
}

export default Comments;
