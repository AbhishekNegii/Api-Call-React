import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovies from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://eminent-parsec-327016-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something wents wrong......Retrying");
      }
      const data = await response.json();

      console.log("data", data);

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      // console.log(loadedMovies)
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        "https://eminent-parsec-327016-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <React.Fragment>
      <AddMovies onAddMovie={addMovieHandler} />
      <section>
        {!error && <button onClick={fetchMovieHandler}>Fetch Movies</button>}
        {error && <button>Cancel</button>}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} onload={fetchMovieHandler}/>}
        {!isLoading && movies.length === 0 && !error && (
          <p>There is no movie found..</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
