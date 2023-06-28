
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Response from './components/Responce';


function App() {
  return (
   <div>


    <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/responce' element={<Response/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
