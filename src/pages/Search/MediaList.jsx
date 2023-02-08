import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "./Search.css"
import { toast } from "react-toastify";
// eslint-disable-next-line

export default function MediaList() {
  const [apiData, setApiData] = useState([]); //initializing state to store movie data from our api call in an array
  const [inputValue, setInputValue] = useState(""); //initializing state to store user input value
  const [loading, setLoading] = useState(false) // State for search loading message
  const [noresults, setNoResults] = useState(false) // State for no movies found

  const getMovies = async e => { 
    try {
      // console.log(process.env.REACT_APP_API_KEY);
      // console.log('test log');
      e.preventDefault();
      setLoading(true) // Show Loading message while loading intial UseEffect
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${inputValue}&apikey=${process.env.REACT_APP_API_KEY}&type=movie`
      );
      if (response.data.Search) {
        const moviesArray = response.data.Search.map(async movie => {
          const detailedRes = await axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_API_KEY}&type=movie`
          );

          return Promise.resolve(detailedRes.data);
        });

        const detailedMovies = await Promise.all(moviesArray);
        setLoading(false) // Change Loading message after API results have been called
        return detailedMovies;
      } else {
        setLoading(false) // Stop loading if there is an error
        setNoResults(true) // Show Error if no movies found
        toast.error('No Movies Found, Please Try A Different Serach')
        return [];
      }
    } catch (error) {
      setLoading(false) // Stop loading if there is an error
      // console.log(error);
      return [];
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async event => {
    const movies = await getMovies(event);
    setApiData(movies);
  };

  // getting default movies
  const getDefaultMovies = async () => {
    try {
      setLoading(true) // Show Loading message while loading intial UseEffect
      const response = await axios.get(
        `https://www.omdbapi.com/?s=Toy+Story&apikey=${process.env.REACT_APP_API_KEY}&type=movie`
      );
      const moviesArray = response.data.Search.map(async movie => {
        const detailedRes = await axios.get(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return Promise.resolve(detailedRes.data);
      });

      const detailedMovies = await Promise.all(moviesArray);
      setApiData(detailedMovies);
      setLoading(true) // Show Loading message while loading intial UseEffect
      return detailedMovies;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    getDefaultMovies();
  }, []);

  return (
    <div>
        <Form className = "searchBar" onSubmit={handleSubmit}>
          {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
          <input value={inputValue} onChange={handleChange} placeholder="Toy Story" type="text" />

          <Button className="button-19 m-2" type="submit">
            Search
            </Button>
        </Form>
      <div className="movie-container">
        {apiData.length === 0 ? 
        (
          <div>
            <p className="error-message">{loading ? <> Loading...</> :<> </>}</p>
            <p className="no-search-results">{noresults ? <> No Movies Found, Try Another Search</> : <> </>} </p>
          </div>
        ) : (
          <Row>
            {apiData.map((movie, id) => {
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
                  <MovieCard movie={movie} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
}
