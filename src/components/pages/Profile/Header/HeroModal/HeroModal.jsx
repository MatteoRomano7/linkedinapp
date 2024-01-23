import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import ProfileForm from "./ProfileForm/ProfileForm";
import ImageUpload from "./ImageUpload/ImageUpload";

function HeroModal({ show, onHide, user, type }) {

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Modifica</Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        {type === "profile" && <ProfileForm data={user} />}
        {type === "upload" && <ImageUpload />}
      </Modal.Body>
    </Modal>
  );
}

export default HeroModal;
