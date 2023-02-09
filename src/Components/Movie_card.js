import React from 'react'
import { useNavigate } from 'react-router-dom';

function Movie_card({data}) {
    let id;
    let nav=useNavigate()
    function go_to_movie(data)
    {
        console.log("data = "+ data)
        nav('/movie/'+data.id,{state:data})
        // nav('/Movie_details',{state:data})
        

    }
  return (
    <div>
        <div className="card m-4 " style={{width: '18rem'}}>
            <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500/'+data.poster_path} alt="Movie Card image"/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.overview}</p>
                <button onClick={()=>go_to_movie(data)} className="btn btn-primary">Movie Details</button>
            </div>
        </div>
    </div>
  )
}

export default Movie_card