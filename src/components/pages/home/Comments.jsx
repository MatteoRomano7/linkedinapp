import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal, Container, Row } from "react-bootstrap";
import { setCommentArray } from "../../../redux/actions";
import { setComments } from "../../../redux/actions";

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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
          },
        }
      );

      if (response.ok) {
        const data = await response.json()
    
        Object.assign(newComment, {...newComment, key:data._id})
        setComments([...comments, newComment]);
        console.log(newComment)
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
                <Form.Control
                  as="textarea"
                  rows={5}
                  style={{
                    border: "transparent",
                    width: "46vh",
                    marginBottom: "5px",
                  }}
                  onChange={(e) => setCommentText(e.target.value)}
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
        onClick={() => onHide(false)}
      >
        Chiudi
      </Button>
    </Modal>
  );
}

export default Comments;
