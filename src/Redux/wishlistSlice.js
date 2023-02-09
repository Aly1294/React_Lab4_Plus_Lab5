import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishList',
    initialState:{
        wishList:[]
    },
    reducers:{
       add_movie_to_wishList: (state,action)=>{
            state.wishList.push(action.payload)
            // console.log(action)
            // console.log(action.payload)
            // console.log("Movie Added")
       },
       remove_movie_from_wishList: (state,action)=>{
        
        state.wishList=state.wishList.filter((item)=>item.id != action.payload)
        // console.log("Movie deleted")
       },
       
    }
    
})

export const {add_movie_to_wishList,remove_movie_from_wishList}= wishlistSlice.actions
export const wishListReducer=wishlistSlice.reducer