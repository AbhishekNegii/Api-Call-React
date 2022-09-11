import React,{useRef} from 'react'
import classes from './AddMovies.module.css'

const AddMovies=(props)=> {


        const titleRef = useRef('');
        const openingTextRef = useRef('');
        const releaseDateRef = useRef('');
      
        function submitHandler(event) {
          event.preventDefault();
      
          // could add validation here...
      
          const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
          };
      
          props.onAddMovie(movie);
        }
      
        return (
          
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='opening-text'>Opening Text</label>
              <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor='date'>Release Date</label>
              <input type='text' id='date' ref={releaseDateRef} />
            </div>
            <button>Add Movie</button>
          </form>
          );
      }

      export default AddMovies







//     const[title,setTitle]=useState('')
//     const[desc,setDesc]=useState('')
//     const[date,setDate]=useState('')
// const submitHandler=(e)=>{
// e.preventDefault();
// var NewMovieObj={
//     Title:title,
//     OpeningText:desc,
//     Date:date


// }
// console.log(NewMovieObj)
// }



//   return (
    
//     <form onSubmit={submitHandler} className={classes.container} >
//         <div className={classes.login}>
//   <label>Title:</label>
//   <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/>
//   <br/>
//   <br/>
//   <label> Opening Text:</label>
//   <input type="text" name="openingText" onChange={(e)=>setDesc(e.target.value)}/>
//   <br/>
//   <br/>
//   <label> Release Date:</label>
//   <input type="date" name="releaseDate" onChange={(e)=>setDate(e.target.value)}/>
//   <br/>
//   <br/>
//   <input type="submit" value="Add Movie" />
//   </div>
// </form>

//   )
// }


