import "./JobSearch.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";

function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="border rounded jobform-container">
      <h1 className="my-5">Cerca</h1>
      <Form className="job-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchJobs(searchQuery, category));
          navigate(`/jobs/${searchQuery}`, { replace: true });
        }}
      >
        <Form.Group className="radio-inputs">
          <Form.Label>Search:</Form.Label>
          <Form.Check
            type="radio"
            label="Anything"
            value="search"
            name="searchCategory"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <Form.Check
            type="radio"
            label="Company"
            value="company"
            name="searchCategory"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Category"
            value="writing"
            name="searchCategory"
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="search"
            id="search"
            name="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default JobSearch;
