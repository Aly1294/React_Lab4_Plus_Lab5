import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement_value, increment_value } from '../Redux/counterSlice';
import { remove_movie_from_wishList } from '../Redux/wishlistSlice';

function WhishList_Card({data}) {
    let [count,setCount]=useState(1)

    let count_from_Slice=useSelector((state)=>state.counterReducer.value)
    // console.log(typeof(count_from_Slice))
    let dispatch=useDispatch()

    function increment(){
        dispatch(increment_value())
        setCount(count_from_Slice)
    }

    
    function decrement(){
        if(count_from_Slice>0){
            dispatch(decrement_value())
            setCount(count_from_Slice)
        }
        
        

    }
    function delete_movie_in_wishList(id){
        // console.log(id)
        dispatch(remove_movie_from_wishList(id))
       }
  return (
    <div className="card m-4 " style={{width: '18rem'}}>
            <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500/'+data.poster_path} alt="Movie Card image"/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.overview}</p>
                <button onClick={()=>delete_movie_in_wishList(data.id)} className="btn btn-primary">Delete Movie</button>
                <div className='d-flex align-items-center mt-3' >
                    <button onClick={increment}  className=" btn btn-primary"><h3>+</h3></button>
                    <h3 className='mx-3'>{count_from_Slice}</h3>
                    <button onClick={decrement}  className="btn btn-primary"><h1>-</h1></button>
                </div>
            </div>
        </div>
  )
}

export default WhishList_Card