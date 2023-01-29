import React from "react";
import GitHub from "./Images/githubLogo.png";
import LinkedIn from "./Images/linkedinLogo.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container' ;
import ScottPic from './Images/Scott_aboutUS.jpeg';
import JuliaPic from './Images/Julia_aboutUS.jpeg';
import MikePic from './Images/Mike_aboutUS.jpeg';
import pofolio_logo from './Images/portfolio.png';
import { Card, Col, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <>
        <Container className = "description">
            <h3>Media Watch List - Information at Your Fingertips</h3>
            <div>Tired of your kid watching Cars 3 for the 100th time? Excited about the newest Marvel release but not sure it is appropriate for you kid?</div>
            <br></br>
            <div>Media Watch List is a website that aggregates information from movie databases for a user to easily like or add a movie to a watchlist. 
            The market for our project is specifically parents of young children, who need an easy way to save movie recommendations and review relevant 
            information such as ratings before showing their child a new movie. No more scrolling endlessly through various notes in your note app to remember 
            where you stashed recommendations from friends, you can save your movies in an organized and informative way using our website.
            </div>
            <div>
                For more information, visit the <a href = "https://github.com/smhenderson89/media-watchlist">ReadME File</a> on the github page
            </div>

        </Container>
        <Container className ="profileCard">
            <h3>Contact Information</h3>
            <Row>
                <Col>
                <Card>
                    {/* Julia Profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={JuliaPic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Julia Szymanski</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/julia-szymanski-3555a7b9">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/julszymanski">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://js-my-portfolio-react.herokuapp.com/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
                <Col>
                <Card>
                    {/* Mike Profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={MikePic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Mike Woolf</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/mwoolfdev/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/mwoolf87">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://mwoolfdev.netlify.app/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
                <Col>
                <Card>
                    {/* Scott Henderson profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={ScottPic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Scott Henderson</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/scottmchenderson/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/smhenderson89/">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://scotthenderson.netlify.app/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default About;

// Scott_aboutUS.jpeg  import logo from './logo.png
