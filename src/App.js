// import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route ,Routes} from 'react-router-dom';



import Nav from './Components/Nav';
import All_movie_cards from './Components/All_movie_cards';
import Home from './Components/Home';
import Movie_details from './Components/Movie_details';
import Movie_details_using_params from './Components/Movie_details_using_params';
// import { Provider } from 'react-redux';
// import { store } from './Redux/Store';
import WishList from './Components/WishList';
// import Increment_and_Decrement from './Components/Increment_and_Decrement';


function App() {
  return (
    // <provider store={store}>
      <BrowserRouter>
        <Nav/>
        
        <Routes>
          <Route path='/login' element={<login/>}></Route>
          {/* <Route  element={<Auth/>}> */}
            <Route path='/All_movie_cards' element={<All_movie_cards/>}/>
          {/* </Route> */}
          <Route path='/home' element={<Home/>}></Route>
          {/* <Route path='/increse&decrease' element={<Increment_and_Decrement/>}></Route> */}
          <Route path='/wishlist' element={<WishList/>}></Route>
          <Route path='/Movie_details' element={<Movie_details/>}></Route>
          <Route path='/movie/:id' element={<Movie_details_using_params/>}></Route>
        </Routes>

      </BrowserRouter>
    // </provider>
  );
}

export default App;
