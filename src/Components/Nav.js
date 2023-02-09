import React from 'react'
import './Nav.css'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

function Nav() {
  let arr_of_Movies_came_from_wishList=useSelector((state)=>state.wishListReducer.wishList)

  return (
    <nav>
   <ul> 

  <li><NavLink to="home">Home</NavLink></li>  
  <li><NavLink to="All_movie_cards">All Movies</NavLink></li>  
  <li className='d-flex align-items-center'><NavLink to="wishlist">Wish_List </NavLink><span>({arr_of_Movies_came_from_wishList.length})</span></li>  
  <li><NavLink to="login">Login</NavLink></li>  
  
  {/* <li><NavLink to="increse&decrease">Increse & Decrease</NavLink></li>   */}

</ul>  
</nav>
  )
}

export default Nav