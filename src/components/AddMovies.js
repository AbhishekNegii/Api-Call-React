import React,{useState} from 'react'
import classes from './AddMovies.module.css'

function AddMovies() {

    const[title,setTitle]=useState('')
    const[desc,setDesc]=useState('')
    const[date,setDate]=useState('')
const submitHandler=(e)=>{
e.preventDefault();
var NewMovieObj={
    Title:title,
    OpeningText:desc,
    Date:date


}
console.log(NewMovieObj)
}



  return (
    
    <form onSubmit={submitHandler} className={classes.container} >
        <div className={classes.login}>
  <label>Title:</label>
  <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/>
  <br/>
  <br/>
  <label> Opening Text:</label>
  <input type="text" name="openingText" onChange={(e)=>setDesc(e.target.value)}/>
  <br/>
  <br/>
  <label> Release Date:</label>
  <input type="date" name="releaseDate" onChange={(e)=>setDate(e.target.value)}/>
  <br/>
  <br/>
  <input type="submit" value="Add Movie" />
  </div>
</form>

  )
}

export default AddMovies
