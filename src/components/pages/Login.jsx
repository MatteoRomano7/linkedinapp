import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAction } from "../../redux/actions"
import { useNavigate } from "react-router-dom"
import { Row, Col, Form, Button } from "react-bootstrap"
import { fetchProfile } from "../../redux/actions"
import linkedinLogo from "../MiniFooter/linkedin_logo_footer.png"

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("")
  const [isLoginDisabled, setLoginDisabled] = useState(true)

  const handleLogin = () => {
    dispatch(loginAction({ token, userId }))
    dispatch(fetchProfile())
    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
    navigate("/")
  }

  const handleTestLogin = () => {
    const testToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyOWJmYjMxYTczZjAwMTlkNWM0NTUiLCJpYXQiOjE3MDYyMDQxNTUsImV4cCI6MTcwNzQxMzc1NX0.9uyOU7pnSY-_IF4wvYbKIK5WDnYXoZTKox832J6ujwA"
    const testUserId = "65b29bfb31a73f0019d5c455"
    localStorage.setItem("token", testToken)
    localStorage.setItem("userId", testUserId)
    dispatch(loginAction({ token: testToken, userId: testUserId }))
    dispatch(fetchProfile())

    navigate("/")
  }

  const handleTokenChange = (e) => {
    setToken(e.target.value)
    updateLoginButtonState(e.target.value, userId)
  }

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
    updateLoginButtonState(token, e.target.value)
  }

  const updateLoginButtonState = (newToken, newUserId) => {
    const isDisabled = !newToken || !newUserId
    setLoginDisabled(isDisabled)
  }

  return (
    <div>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={4}>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
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
              <hr />

              <div className="text-center">
                <Button
                  variant="primary"
                  onClick={handleLogin}
                  disabled={isLoginDisabled}
                  style={{ width: "160px", marginBottom: "1rem" }}
                >
                  Login
                </Button>
              </div>
              <p className="text-center">
                <a
                  onClick={handleTestLogin}
                  className="test-login-link "
                  style={{ cursor: "pointer" }}
                >
                  Entra come ospite
                </a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage
