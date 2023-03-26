import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>
     <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Login 
        setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
   </BrowserRouter>
      
    </div>
  )
}

export default App
