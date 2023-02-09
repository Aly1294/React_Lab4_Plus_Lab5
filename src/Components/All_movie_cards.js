import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Movie_card from './Movie_card';

function All_movie_cards() {
  let [movies,setMovies] = useState([])

  useEffect(()=>{

    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1450b175a4dab334bd7f3a63da4cc3f5')
    
    .then(function (res) {
    console.log(res);
    setMovies(res.data.results)
    console.log(movies)
    })

  },[])
  return (
    <div>
       <div className='ms-5 d-flex'>
        {/* {JSON.stringify(movies)} */}
       {movies.map((item,index)=><Movie_card key={index} data={item} /> )}
       </div>
    </div>
    
  )
}

export default All_movie_cards