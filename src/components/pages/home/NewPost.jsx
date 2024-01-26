import React, { useState } from "react";
import {
  Form,
  Card,
  Modal,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import {
  FcClapperboard,
  FcPicture,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import "./NewPost.css";

const NewPost = () => {
  const profilo = useSelector((state) => state.profile);
  const [show, setShow] = useState(false);
  const [newPost, setNewPost] = useState({ text: "" });
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const createNewPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
            `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(newPost),
        }
      );

      if (response.ok) {
        const newPostJson = await response.json();

        if (imageFile) {
          const formData = new FormData();
          formData.append("post", imageFile);

          await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${newPostJson._id}`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization:
                  `Bearer ${localStorage.getItem('token')}`,
              },
            }
          );
        }

        // dispatch({ type: "SET_POSTS", payload: newPostJson });
        setNewPost({ text: "" });
        setImageFile(null);
        handleClose();
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="d-flex align-items-center">
            <Col xs={2}>
              <Card.Img src={profilo.image} alt="foto" className="fotoTonda" />
            </Col>
            <Col xs={10}>
              <Form className="my-4">
                <Form.Control
                  type="search"
                  placeholder="Scrivi un post..."
                  onClick={handleShow}
                />
              </Form>
            </Col>
          </Row>
        </Card.Body>
        <Row className="text-muted justify-content-center flex-nowrap">
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2 text-primary pointer">
              <FcPicture size={26} /> Foto
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded "
          >
            <div className="mb-0 ml-2 pointer">
              <FcClapperboard size={26} /> Video
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2 pointer">
              <FcPlanner size={26} /> Eventi
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2 pointer">
              <FcViewDetails size={26} /> Articolo
            </div>
          </Col>
        </Row>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span>Crea un post</span>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Card.Body>
                <div className="d-flex flex-row">
                  <span className="d-flex flex-column ml-3"></span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              <Form className="" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Che cosa vuoi postare?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                  <Form.Control type="file" onChange={handleImageChange} className="mt-3" />
                </Form.Group>
                <hr />

                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-success"
                    type="submit"
                    style={{ width: "160px" }}
                  >
                    Pubblica
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewPost;
