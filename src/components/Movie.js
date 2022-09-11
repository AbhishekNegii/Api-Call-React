import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  function deleteHandler(){
    fetch(`https://eminent-parsec-327016-default-rtdb.asia-southeast1.firebasedatabase.app/${props.id}.json`,{
      method:"DELETE"
    }).then(props.onload)
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
