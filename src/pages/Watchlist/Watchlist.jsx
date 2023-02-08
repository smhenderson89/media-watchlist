import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import WatchListCard from "./WatchListCard";
import { toast } from "react-toastify";
import "../Search/MovieCard.css"
import "./Watchlist.css"

export default function WatchList() {
  const local = window.localStorage;
  // eslint-disable-next-line
  const userID = local.getItem("userID");
  const [watchListData, setWatchListData] = useState([]); //initializing state to store movie data from our api call in an array
  const [loading, setLoading] = useState(false) // State for search loading message

  useEffect(() => {
    const getWatchListData = () => {
      setLoading(true)
      if (userID == null) {
        // If User ID is not defined, then don't call on database
      } else { // If User ID is defined, call on database
        axios
        .get(`https://mwl-backend-v2.herokuapp.com/watchlist/${userID}`)
        .then(res => res.data)
        .then (data => {
          if (data.result === false) {
            setLoading(false)
            // If no watchlist, then return toast "No Movies found"
            toast.error("No Movies Found")
          } else {
            setLoading(false)
            toast.success("Watchlist Loaded")
            setWatchListData(data.information);
          }})
          .catch(function(err) {
            // console.log(err);
        })
      }
    };

    getWatchListData();
  }, []);

  return (
    <div>
      {String(local.getItem("first")) &&
      String(local.getItem("last")) === "null" ? (
        <div>
          <h1>Guest Media-Watchlist</h1>
          <div>
            <a id = "blueLink" href = "https://media-watch-list.herokuapp.com/login">Login</a> or create an <a id = "blueLink" href = "https://media-watch-list.herokuapp.com/login">account</a> to save movies to watchlist</div>
        </div>
      ) : (
        <div>
        <h1>
          {String(local.getItem("first"))} {String(local.getItem("last"))}'s
          Media-Watchlist
        </h1>
        <p className="error-message">{loading ? <> Loading...</> :<> </>}</p>
        </div>
      )}
      <Row>
        {watchListData &&
          watchListData.map((movie, id) => {
            return (
              <Col
                key={id}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className="mb-6"
              >
                <WatchListCard
                  movie={movie}
                  setWatchListData={setWatchListData}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}