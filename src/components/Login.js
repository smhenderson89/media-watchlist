import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../CSS/Login.css";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';


export default function Login() {
  const [registerModalShow, setRegisterModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  let newFirstName = "";
  let newLastName = "";
  let newEmail = "";
  let newPassword = "";
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
  }

  // Check Login Function
function checkLogin() {
  fetch('http://127.0.0.1:4000/login/verify', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {email: newEmail,
          password: newPassword})
  }).then (res => res.json())
  .then (data => {
      console.log(data.login);
      if (data.login) {
        toast.success('🦄 Login Successful!');
      } else {
        toast.error('Login Unsuccessful');
      }
      navigate('/');
      // showAlert(data)
  })
  .catch(function (err) {
      console.log('something went wrong, call on database', err); // console.log the errors if any
  });
}

function checkRegistration() {
  fetch('http://127.0.0.1:4000/login/register', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            password: newPassword})
  }).then (res => res.json())
  .then (data => {
      console.log(data);
      if (data.registration) {
        toast.success('🦄 Registration Successful!');
      } else {
        toast.error('Already Registered!');
      }
      navigate('/');
      // showAlert(data)
  })
  .catch(function (err) {
      console.log('something went wrong, call on database', err); // console.log the errors if any
  });
}

  function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Login to access cards</h4>
          <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            // value={newEmail}
            onChange={(e) => newEmail=(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={newPassword}
            onChange={(e) => newPassword=(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" onClick={checkLogin}>
          Login
        </Button>
      </Form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign up Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Sign up to access cards</h4>
          <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="email">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => newFirstName=(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => newLastName=(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={(e) => newEmail=(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={newPassword}
            onChange={(e) => newPassword=(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" onClick={checkRegistration}>
          Sign Up
        </Button>
      </Form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

    return (
      <>
        <Button className="m-2" block size="lg" onClick={() => setLoginModalShow(true)}>
          Login
        </Button>

        <Button block size="lg" onClick={() => setRegisterModalShow(true)}>
          Signup
        </Button>
  
        <LoginModal
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
        />
        <RegisterModal
          show={registerModalShow}
          onHide={() => setRegisterModalShow(false)}
        />

      </>
    );
}