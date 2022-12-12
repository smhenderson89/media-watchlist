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

  function logout() {
    fetch("https://mwl-backend-v2.herokuapp.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        /* console.log(data); */
        if (data.message) { 
          local.clear(); 
          navigate("/");
        }
        toast.success("Logout Successful!");
      });
  }

  function changePassword() {
    fetch("https://mwl-backend-v2.herokuapp.com/users/password/:id", {
      method: "PUT",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        id : localStorage.id,
        email : localStorage.email,
        newEmail : newEmail})
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.updatedEmail) {
          localStorage.setItem("email", data.updatedEmail);
          toast.success('Email updated!');
          navigate('/dashboard');
        } else {
          toast.error('Email not updated')
        }
      })
      .catch(function(err) {
        console.log('Update Email error', err);
      });
  }

  function changeEmail() {
    fetch("https://mwl-backend-v2.herokuapp.com/users/email/:id", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id : id, 
        newEmail: newEmail})
    }).then(res => res.json())
    .then (data => {
      if (data) {
        console.log('Email Updated!')
        toast.success('Email Updated')
      } else {
        toast.error('An Error Has Occured')
      }
    })
  }

  // Debug Button while I troubleshoot - Scott
  function showValues() {
    console.log(`Email is ${newEmail}`);
    console.log(`PWord is ${newPassword}`);
    console.log(`UserID is ${id}`);
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
              <form className="input">
                <label>
                  Update Email:
                  <input className="input-class" type="text" name="email" onChange={(e) => newEmail = (e.target.value)} />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" onClick = {changeEmail} />
              </form>
            </div>
            {/* User clicks button, updates email to new email, show toast information */}
            <div>
              <form>
                <label>
                  Update Password:
                  <input className="input-class" type="text" name="email" onChange={(e) => newPassword = (e.target.value)} />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" onClick={changePassword} />
              </form>
            </div>
            {/* User click buttons, gives option to update password 
            toast notifcation that user password has been updated */}
            <button className="button-19 m-2">Delete Account</button>
            {/* Delete account, delete user and then switch user to registration page
            show toast notifcation that account has been delete */}
            <button className="button-19 m-2" onClick={logout}>Log Out</button>
            <button className="button-19 m-2"onClick={showValues}>DEBUG Console  Log</button>
            {/* Logout from account */}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Dashboard;
