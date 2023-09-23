import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from '../src/components/content/content.jsx';
import Footer from '../src/components/footer/footer'
import Login from './components/Login';
import Signup from './components/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Venucard from './components/Venucard';
import Term from './components/Term.jsx';
import { useState } from 'react';
import Bookingcard from './components/Bookingcard';

function App() {
  const [userdata,setuserdata]=useState([]);
  const [isLoggedin,setLoggedin]=useState(false)
  const [booking_array,setbooking]=useState([])
  const appendfn = (val) => {
    const existingItemIndex = booking_array.findIndex(
      item => item.title === val.title 
    );

    if (existingItemIndex !== -1) {

    } else {
      const newItem = { ...val };
      setbooking(book => [...book, newItem]);

    }
  };
console.log(booking_array)
  return (
    <div >
      <BrowserRouter>
       <Navbar setuserdata={setuserdata} setLoggedin={setLoggedin} isLoggedin={isLoggedin} />
      <Routes>
      <Route exact path='/' element={<Content booking_array={booking_array} userdata={userdata} isLoggedin={isLoggedin} />}></Route>
      <Route exact path='/login' element={<Login setuserdata={setuserdata} setLoggedin={setLoggedin}/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/venue' element={<Venucard userdata={userdata} booking_array={booking_array} appendfn={appendfn} isLoggedin={isLoggedin} setbooking={setbooking} />}></Route>
      <Route exact path='/terms' element={<Term/>}></Route>
      <Route exact path='/mybookings' element={<Bookingcard booking_array={booking_array} isLoggedin={isLoggedin} userdata={userdata} />}></Route>

      </Routes>
     <Footer/>
      </BrowserRouter>
    
    
    
    
    </div>
  );
}

export default App;