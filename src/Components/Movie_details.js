import React ,{useEffect,useState}from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { add_movie_to_wishList } from '../Redux/wishlistSlice'

function Movie_details() {
  const dispatch= useDispatch()
   const location=useLocation()
   console.log(location)
   let [movie,setMovie]=useState({});
   useEffect(()=>{
    setMovie(location.state)
   },[])


   function add_movie_in_wishList(){
    dispatch(add_movie_to_wishList())
   }

  return (
    <div >
        <div className='d-flex mt-5 align-items-center'  >
            <img style={{width:'20rem'}} className="ms-4 card-img-top me-3" src={'https://image.tmdb.org/t/p/w500/'+movie?.poster_path} alt="Movie Card image"/>
            <div className=''>
                <h1 className="card-title">{movie?.title}</h1>
                <p className="card-text">{movie?.overview}</p>
                <button onClick={add_movie_in_wishList}  className="btn btn-primary">Add to my wish list to watch later</button>
            </div>
        </div>
    </div>
  )
}

export default Movie_details