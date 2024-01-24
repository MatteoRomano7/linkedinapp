import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ImageUpload.css"
import { useState } from "react";

function ImageUpload({ onClose }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    event.preventDefault();

    const file = event.currentTarget["fileInput"].files[0];

    const formData = new FormData();
    formData.append("profile", file);

    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/65ae8689bd5d12001890d317/picture",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
        },
        body: formData,
      }
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <div className="img-container">
        <img src={image} className="preview-img" />
      </div>
      <Form
        onSubmit={(e) => {
          handleImageUpload(e);
          onClose();
        }}
        encType="multipart/form-data"
      >
        <Form.Control
          className="image-upload"
          type="file"
          id="fileInput"
          onChange={(event) => {
            setImage(URL.createObjectURL(event.target.files[0]));
          }}
        ></Form.Control>
        <hr />
        <Button type="submit">submit image</Button>
      </Form>
    </>
  );
}

export default ImageUpload;
