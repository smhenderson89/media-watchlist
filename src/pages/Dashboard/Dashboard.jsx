import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const local = window.localStorage;
  const navigate = useNavigate();
  let newPassword = "";
  let newEmail = "";
  let id = local.userID;
  function handleSubmit(event) {
    event.preventDefault();
  }

  function logout() {
    fetch("https://mwl-backend-v2.herokuapp.com/logout", {
      method: "POST",
      mode: 'cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        id : id})
    })
      .then(res => res.json())
      .then(data => {
        if (data.logout) { 
          local.clear(); 
          navigate("/");
          toast.success("Logout Successful! Thanks for using Media Watch List");
        } else {
          toast.error("User not logged in")
        }
      });
  }

  function changePassword() {
    fetch("https://mwl-backend-v2.herokuapp.com/users/password", {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        id : id,
        newPass : newPassword})
      }).then(res => res.json())
      .then(data => {
        if (data.result) {
          toast.success('Password is updated!');
          navigate('/dashboard');
        } else {
          toast.error('An Error has Occued')
        }
      })
      .catch(function(err) {
        // console.log('Update Password error', err);
      });
  }

  function changeEmail() {
    fetch("https://mwl-backend-v2.herokuapp.com/users/email", {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept' : "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : id,
        newEmail: newEmail})
    }).then(res => res.json())
    .then (data => {
      if (data.result) {
        local.setItem("email", data.updatedEmail)
        navigate('/dashboard')
        toast.success('Email Updated')
      } else {
        toast.error(`Error: ${data.message}`)
      }
    })
  }

  return (
    <div className="dashboard">
      {String(local.getItem("first")) &&
      String(local.getItem("last")) === "null" ? (
        <h2 className="text-center">
          Welcome, Guest! <br></br> Please <a id = "blueLink" href="https://media-watch-list.herokuapp.com/">Login</a> to Edit your Credentials
        </h2>
      ) : (
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>
              <h4>User Dashboard</h4>
            </Card.Title>
            <Card.Title>
              <p>
                Welcome, {String(local.getItem("first"))}{" "}
                {String(local.getItem("last"))}
              </p>
            </Card.Title>
            <Card.Title>
              <div>Email: {String(local.getItem("email"))}</div>
            </Card.Title>
            <div>
              <form className="input" onSubmit={handleSubmit}>
                <label>
                  Update Email:
                  <input className="input-class" type="text" name="new-email" onChange={(e) => newEmail = (e.target.value)} />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" onClick = {changeEmail} />
              </form>
            </div>
            {/* User clicks button, updates email to new email, show toast information */}
            <div>
              <form className="input" onSubmit={handleSubmit}>
                <label>
                  Update Password:
                  <input className="input-class" type="password" name="new-password" onChange={(e) => newPassword = (e.target.value)} />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" onClick={changePassword} />
              </form>
            </div>
            <button className="button-19 m-2" onClick={logout}>Log Out</button>
            {/* <button className="button-19 m-2"onClick={showValues}>DEBUG Console  Log</button> */}
            {/* Logout from account */}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Dashboard;
