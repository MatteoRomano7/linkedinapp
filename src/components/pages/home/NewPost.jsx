import React, { useState, useEffect } from "react";
import { Form, Card, Modal, Button, Col, Row, Container } from "react-bootstrap";
import { FcClapperboard, FcPicture, FcPlanner, FcViewDetails } from "react-icons/fc";

const NewPost = () => {
  const [show, setShow] = useState(false);
  const [newPost, setNewPost] = useState({ text: "" });
  const [profileImage, setProfileImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProfileImage();
  }, []);

  const fetchProfileImage = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
        },
      });
  
      if (response.ok) {
        const profileData = await response.json();
  
        if (profileData && profileData.image) {
          setProfileImage(profileData.image);
        } else {
          console.error("Image not available in profile data");
        }
      } else {
        console.error("Error fetching profile image");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const createNewPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const newPostJson = await response.json();

        if (imageFile) {
          const formData = new FormData();
          formData.append("post", imageFile);

          await fetch(`https://striveschool-api.herokuapp.com/api/posts/${newPostJson._id}`, {
            method: "POST",
            body: formData,
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
            },
          });
        }

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
          <Row className="d-flex">
            <Col xs={2}>
              <Card.Img src={profileImage} alt="foto" className="fotoTonda" />
            </Col>
            <Col xs={10}>
              <Form className="my-4">
                <Form.Control type="search" placeholder="Scrivi un post..." onClick={handleShow} />
              </Form>
            </Col>
          </Row>
        </Card.Body>
        <Row className="text-muted justify-content-center flex-nowrap">
        <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2 text-primary">
              <FcPicture size={26} /> Foto
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2">
              <FcClapperboard size={26} /> Video
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2">
              <FcPlanner size={26} /> Eventi
            </div>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center p-2 rounded"
          >
            <div className="mb-0 ml-2">
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
                  <span className="d-flex flex-column ml-3">
                    <Card.Text className="">
                      Ciao, che testo vuoi postare?
                    </Card.Text>
                  </span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              <Form className="" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    style={{
                      border: "transparent",
                      width: "46vh",
                      marginBottom: "5px",
                    }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                  <input type="file" onChange={handleImageChange} />
                </Form.Group>
                <div className="d-flex">
                  <Button variant="outline-success" type="submit">
                    Pubblica
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Button
          variant="outline-danger"
          className="mx-5 mb-2"
          onClick={handleClose}
        >
          Chiudi
        </Button>
      </Modal>
    </>
  );
};

export default NewPost;
