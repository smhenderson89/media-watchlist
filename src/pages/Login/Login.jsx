import React from "react";
import {Form, Button, Image, Modal} from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import MWL from "./images/MWL.jpeg"
import { FcGoogle } from 'react-icons/fc'

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
  fetch('https://mwl-backend-v2.herokuapp.com/login/verify', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  }).then (res => res.json())
  .then (data => {
      if (data.login) {
        // Set data from backend storage into the front end Session Storage
        localStorage.setItem("userID",data.session.userid)
        localStorage.setItem("first",data.session.first)
        localStorage.setItem("last",data.session.last)
        localStorage.setItem("email",data.session.email)
        localStorage.setItem("login",data.session.loggedIn)
        toast.success('🦄 Login Successful!');
        navigate('/medialist');
      } else {
        toast.error('Login Unsuccessful');
      }
      // showAlert(data)
  })
  .catch(function (err) {
      // console.log('something went wrong, call on database', err); // console.log the errors if any
  });
}

function googleLogin() {
  window.open("https://localhost:4000/auth/google", "_self");
}

function checkRedirect() {
  fetch('https://mwl-backend-v2.herokuapp.com/auth/verify', {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then (res => res.json())
  .then (data => {
      // console.log(data.registration);
      if (data.result) {
        console.log(data)
        toast.success('🦄 Login Successful!');
      } else {
        console.log('fail error');
      }
      // showAlert(data)
  })
  .catch(function (err) {
      // console.log('something went wrong, call on database', err); // 
  });
}

function checkRegistration() {
  fetch('https://mwl-backend-v2.herokuapp.com/login/register', {
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
      // console.log(data.registration);
      if (data.registration) {
        localStorage.setItem("userID",data.session.userid)
        localStorage.setItem("first",data.session.first)
        localStorage.setItem("last",data.session.last)
        localStorage.setItem("email",data.session.email)
        localStorage.setItem("login",data.session.loggedIn)
        toast.success('🦄 Registration Successful!');
        navigate('/medialist');
      } else {
        toast.error('Already Registered!');
      }
      // showAlert(data)
  })
  .catch(function (err) {
      // console.log('something went wrong, call on database', err); // 
  });
}

  function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Button className="button-19 m-2" block size="md" type="submit" onClick={checkLogin}>
          Login
        </Button>
        <Button className="button-19 m-2" onClick = {checkRedirect}>Test Redirect</Button>
        {/* DEBUG: DEV http://localhost:4000/auth/google/callback
        ACTUAL SITE: https://mwl-backend-v2.herokuapp.com/auth/google 
        
        Passport link must be href
        
        */}
        <Button className="button-20 m-2" block size = "lg" onClick={googleLogin}>
            <FcGoogle /> Login with Google 
        </Button>
        {/* <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          /> */}
      </Form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-19 m-2" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Button className="button-19 m-2" block size="lg" type="submit" onClick={checkRegistration}>
          Sign Up
        </Button>
      </Form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-19 m-2" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

    return (
      <>
      <div>
      <Image className="logoPic" src={MWL} alt="Media Watch List logo" rounded />
      </div>
        <Button className="button-19 m-2" role="button" block size="lg" onClick={() => setLoginModalShow(true)}>
          Login
        </Button>

        <Button className="button-19 m-2" block size="lg" onClick={() => setRegisterModalShow(true)}>
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
        <br></br>

      </>
    );
}