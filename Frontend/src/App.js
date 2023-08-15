import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from '../src/components/content/content.jsx';
import Footer from '../src/components/footer/footer'
import Login from './components/Login';
import Signup from './components/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route exact path='/' element={<Content/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    
    
    
    </div>
  );
}

export default App;