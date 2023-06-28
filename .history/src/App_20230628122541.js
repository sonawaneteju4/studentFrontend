
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Response from './components/Responce';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
   <div>


    <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  exact path='/responce' element={<Response/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
