import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ImageUpload.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../../../../redux/actions";

function ImageUpload({ onClose }) {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile);

  const handleImageUpload = (event) => {
    event.preventDefault();

    const file = event.currentTarget["fileInput"].files[0];

    const formData = new FormData();
    formData.append("profile", file);

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`,
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      }
    ).then(() => dispatch(fetchProfile()))
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
