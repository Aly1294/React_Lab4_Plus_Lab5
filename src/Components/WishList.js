import React from 'react'
import { useSelector } from 'react-redux'
import WhishList_Card from './WhishList_Card';


function WishList() {

  let arr_of_Movies_came_from_wishList=useSelector((state)=>state.wishListReducer.wishList)
  // console.log(arr_of_Movies_came_from_wishList.length)
  // console.log(".........................")
  let arr_of_movies=arr_of_Movies_came_from_wishList
  return (
    <div>
       <div className='d-flex align-items-center'>
        <h3>WishList Contain : </h3>
        <h5 className='ms-3 position-relative fs-4 ' style={{top:'0.25rem'}}>{arr_of_Movies_came_from_wishList.length}</h5>
        <h3 className='ms-2 mt-2'>Movies </h3>
       </div>
       {arr_of_movies.map((item,index)=><WhishList_Card key={index} data={item} /> )}
        
        
    </div>
  )
}

export default WishList