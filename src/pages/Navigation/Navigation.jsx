import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { HiOutlineUser } from "react-icons/hi";

const local = window.localStorage;
// eslint-disable-next-line
const userID = local.getItem("userID");
// const displayInfo = useContext(profileInfo)

// const [name, setName] = useState([]) // Initalize Username information


function NavBar() {

  return (
    <Navbar style={{ backgroundColor: "#1B4D89" }} collapseOnSelect expand="md" fixed = "top">
      <Container>
        <Navbar.Brand style={{ color: "#F9E45B" }} href="/">Media Watch List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className = "navBarLinks">
            <Nav className="navbar-nav">
              <Link className = "navLinks" to="/medialist">Search</Link>
              <Link className = "navLinks" to="/watchlist">Watchlist</Link>
              <Link className = "navLinks" to="/about">About</Link>
              <Link className = "navLinks" to="/dashboard">
                <HiOutlineUser/>
              </Link>
              <Navbar.Brand style={{ color: "#F9E45B" }}>
                {String(local.getItem("first")) && String(local.getItem("last")) === "null" ? (
                  // eslint-disable-next-line
                  <a>Welcome, Guest!</a> ) : (
                  // eslint-disable-next-line
                  <a>Welcome, {String(local.getItem("first"))} {String(local.getItem("last"))}!</a>)}</Navbar.Brand>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;