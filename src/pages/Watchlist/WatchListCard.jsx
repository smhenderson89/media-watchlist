import React, { useState } from "react";
import { Card, Button, Col, Row, Modal, Image, ListGroup } from "react-bootstrap";
import imdblogo from "../../components/shared/images/imdb.png";
import csmlogo from "../../components/shared/images/csm.png";
import justwatch from "../../components/shared/images/justwatch-square.png";
import axios from "axios";
import "../Search/MovieCard.css";
import { toast } from 'react-toastify';
import imageNA from "../../components/shared/images/imageNA.png"
import "./WatchListCard.css";

export default function WatchListCard({ movie, setWatchListData }) {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  // eslint-disable-next-line
  const handleShow = () => setModalShow(true);

  const parentsGuideURL =
    "https://www.imdb.com/title/" + movie.imdbID + "/parentalguide";
  // console.log(parentsGuideURL);
  // Dash title (i.e. Lord of the Rings: Return -> Lord-of-the-Rings-Return)
  const dashedTitle = movie.title.replace(/:+/g, "").replace(/\s+/g, "-");

  const commonSenseURL =
    "https://www.commonsensemedia.org/movie-reviews/" + dashedTitle;

  const justWatchURL = "https://www.justwatch.com/us/movie/" + dashedTitle;

  const local = window.localStorage;
  let userID = local.getItem("userID");

  const deleteMovie = async imdbID => {
    await axios.delete(
      `https://mwl-backend-v2.herokuapp.com/watchlist/${imdbID}`,
      {
        data: { UserId: userID }
      }
    );
    axios
      .get(`https://mwl-backend-v2.herokuapp.com/watchlist/${userID}`)
      .then(res => setWatchListData(res.data.information));
      toast.success('Movie Deleted!');
  };

  return (
    <div>
      {movie && (
        <div className="movie-card-container">
          <Card className="movie-card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top" onClick={() => setModalShow(true)}
              src={movie.poster === "N/A" ? imageNA : movie.poster}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Title>{movie.released}</Card.Title>
              <Card.Title>{movie.rated}</Card.Title>
              <Button className="button-19 m-2" onClick={() => setModalShow(true)} variant="warning">
                More Info
              </Button>
              <Button
                className="button-19 m-2"
                onClick={() => deleteMovie(movie.imdbID)}
                variant="danger"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
          {/* Modal Begins */}
          {modalShow && <Modal />}
          <Modal show={modalShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Row>
              <ListGroup.Item variant = "secondary">Director: {movie.director}</ListGroup.Item>
              <ListGroup.Item>Runtime: {movie.runTime}</ListGroup.Item>
              <ListGroup.Item variant = "secondary">Year: {movie.year}</ListGroup.Item>
              <ListGroup.Item>Language: {movie.language}</ListGroup.Item>
              <ListGroup.Item variant = "secondary">Rating: {movie.rated}</ListGroup.Item>
              <ListGroup.Item>Metascore: {movie.metaScore}</ListGroup.Item>
              <ListGroup.Item variant = "secondary">imdbRating: {movie.imdbRating}</ListGroup.Item>
              <ListGroup.Item>Genre: {movie.genre}</ListGroup.Item>
              <ListGroup.Item>{movie.plot}</ListGroup.Item>
              <Col>
                <a
                  className="movieLink"
                  href={parentsGuideURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image className="imdblogo" src={imdblogo} alt="imdb_logo" />
                  <div>Parents Guide</div>
                </a>
              </Col>
              <Col>
                <a
                  className="movieLink"
                  href={commonSenseURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image src={csmlogo} alt="csm_logo" />
                  <div>Common Sense Media</div>
                </a>
              </Col>
              <Col>
                <a
                  className="movieLink"
                  href={justWatchURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    className="imdblogo"
                    src={justwatch}
                    alt="just_watch_logo"
                  />
                  <div>Stream</div>
                </a>
              </Col>
            </Row>
            <Modal.Footer>
              <Button className="button-19 m-2" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}
