

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Servicios from './Components/Servicios/Servicios';
import Contacto from './Components/Contacto/Contacto';

function App() {
 

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/servicios" element ={<Servicios/>} exact />
          <Route path="/contacto" element ={<Contacto/>} exact />

        </Routes>
        
    </>
  )
}

export default App
