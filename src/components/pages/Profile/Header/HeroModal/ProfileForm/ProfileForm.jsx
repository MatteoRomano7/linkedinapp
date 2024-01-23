import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfileForm({ data, onClose }) {
  const [tempData, setTempData] = useState({});
  const dispatch = useDispatch();
  const asdf = useSelector((state) => state.profile);

  function updateProfile() {
    const filteredUser = {};
    for (let key in data) {
      if (!["createdAt", "updatedAt", "__v", "_id", "image"].includes(key)) {
        Object.assign(filteredUser, { [key]: data[key] });
      }
    }

    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, ...tempData }),
    });
    

  }

  return (
    <>
      <small>* Indica che è obbligatorio</small>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateProfile();
          dispatch({ type: "SET_PROFILE", payload: { ...data, ...tempData } })
          onClose();


        }}
      >
        <Form.Group>
          <Form.Label>Name*</Form.Label>
          <Form.Control
            id="name"
            required
            onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
          />
        </Form.Group>
        {["surname", "title", "address"].map((input) => {
          return (
            <Form.Group key={input}>
              <Form.Label style={{ textTransform: "capitalize" }}>
                {input}
              </Form.Label>
              <Form.Control
                id={input}
                onChange={(e) =>
                  setTempData({ ...tempData, [input]: e.target.value })
                }
              />
            </Form.Group>
          );
        })}
        <hr />
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ProfileForm;
