import React, {useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import  axios  from 'axios';
import { useDispatch } from 'react-redux';
import { add_movie_to_wishList } from '../Redux/wishlistSlice';

function Movie_details_using_params() {
    // const location=useLocation()
//    console.log("loc=== "+location)
    let params=useParams();
    let dispatch=useDispatch()
    console.log(params.id)

    let [movie,setMovie]=useState({})
    useEffect(()=>{

        axios.get('https://api.themoviedb.org/3/movie/'+params.id+'?api_key=1450b175a4dab334bd7f3a63da4cc3f5')
        .then(function (res) {
        // console.log(res.data);
        setMovie(res.data)
        // console.log(movie)
        })
    
      },[])

       function add_movie_in_wishList(){
     console.log("dfgdfgdf");
        dispatch(add_movie_to_wishList(movie))
       }
  return (
    <div >
        
        <div className='d-flex mt-5 align-items-center'  >
            <img style={{width:'20rem'}} className="ms-4 card-img-top me-3" src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="Movie Card image"/>
            <div className=''>
                <h1 className="card-title">{movie.title}</h1>
                <p className="card-text">{movie.overview}</p>
                <div>
                    <button onClick={add_movie_in_wishList} className="btn btn-primary">Add to my wish list to watch later</button>
                </div>
                
                
                
            </div>
        </div>

    </div>
  )
}

export default Movie_details_using_params