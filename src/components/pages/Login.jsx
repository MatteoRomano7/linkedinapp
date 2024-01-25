import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Cursor } from "react-bootstrap-icons";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoginDisabled, setLoginDisabled] = useState(true);

  const handleLogin = () => {
    dispatch(loginAction({ token, userId }));
    navigate("/home");
  };

  const handleTestLogin = () => {
    console.log("Handle test login clicked");
    const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyOWJmYjMxYTczZjAwMTlkNWM0NTUiLCJpYXQiOjE3MDYyMDQxNTUsImV4cCI6MTcwNzQxMzc1NX0.9uyOU7pnSY-_IF4wvYbKIK5WDnYXoZTKox832J6ujwA";
    const testUserId = "65b29bfb31a73f0019d5c455";
    dispatch(loginAction({ testToken, testUserId }));
    navigate("/home");
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
    updateLoginButtonState(e.target.value, userId);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    updateLoginButtonState(token, e.target.value);
  };

  const updateLoginButtonState = (newToken, newUserId) => {
    const isDisabled = !newToken || !newUserId;
    setLoginDisabled(isDisabled);
  };

  return (
    <div>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={4}>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/img/linkedin_logo_footer.png" alt="LinkedIn Logo" />
            </a>
          </nav>

          <div className="login-form">
            <Form>
              <Form.Group controlId="token">
                <Form.Label>Token:</Form.Label>
                <Form.Control
                  type="text"
                  value={token}
                  onChange={handleTokenChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="userId">
                <Form.Label>User ID:</Form.Label>
                <Form.Control
                  type="text"
                  value={userId}
                  onChange={handleUserIdChange}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={handleLogin}
                disabled={isLoginDisabled}
              >
                Login
              </Button>

              <p>
                Se vuoi procedere al login con un profilo di prova,{" "}
                <a onClick={handleTestLogin} className="test-login-link" style={{cursor: "pointer"}}>
                  clicca qui
                </a>
                .
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
