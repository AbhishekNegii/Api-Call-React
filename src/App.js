import React, {  useEffect,useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovies from "./components/AddMovies";


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const[intervalId,setIntervalId]=useState(0);
  //using useEffect 
  // let intervalId;

//using setInterval

// const cancelHandler=()=>{ 
//   clearInterval(intervalId)
//   console.log(intervalId)
// }


  const fetchMovieHandler=(async()=> {
    try {      
    const response = await fetch("https://swapi.dev/api/films");
    
      if (!response.ok) {      
        throw new Error("Something wents wrong......Retrying");
      }
    
    
    const data = await response.json();
    setIsLoading(true);
    setError(null);
        const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
       
      setError(error.message);
      console.log(error.message)
    
    }
    setIsLoading(false);
  })
  useEffect(()=>{    
      fetchMovieHandler()   
   },[fetchMovieHandler])

  return (
    <React.Fragment>
      <AddMovies/>
      <section>
        {!error && <button onClick={fetchMovieHandler}>Fetch Movies</button>}
        {error && <button >Cancel</button>}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
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
