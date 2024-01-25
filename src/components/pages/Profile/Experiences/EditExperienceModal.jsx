import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"

const EditExperienceModal = ({
  isOpen,
  onRequestClose,
  experience,
  onSubmit,
  onDelete,
}) => {
  const [editedExperience, setEditedExperience] = useState({ ...experience })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedExperience({
      ...editedExperience,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    onSubmit(editedExperience)
    onRequestClose()
  }

  const handleDelete = () => {
    onDelete()
    onRequestClose()
  }

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={editedExperience.role}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={editedExperience.company}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={editedExperience.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={editedExperience.area}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete Experience
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditExperienceModal
