import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  async function fetchMovieHandler(){
  
    const resp= await fetch('https://swapi.dev/api/films')
    const data=await resp.json()
    setIsLoading(true)
      const transformedMovies=data.results.map(movieData=>{
        return{
          id: movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedMovies);
      setIsLoading(false)
    }
    
    return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
      
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>loading....</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
