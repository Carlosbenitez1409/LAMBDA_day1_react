import { useState, useEffect } from 'react';
import './App.css';
import Bienvenida from './components/day1/Bienvenida';
import ListaProductos from './components/day1/ListaProductos';
import Counter from './components/day2/Counter';
import FormularioInteractivo from './components/day2/FormularioInteractivo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//import Api from './components/day3/Api';

import Api from './components/day4/Api2';
import Profile from './components/day4/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/perfil/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}


export default App;

{/*
  <Bienvenida nombre="Carlos" />
  <ListaProductos productos={productos}/>
  <h2 className="flex justify-center items-center max-w-screen mt-4">Contador con React y Vite</h2>
  <Counter />
  <h2 className="flex justify-center items-center max-w-screen mt-4">Formulario interactivo</h2>
  <FormularioInteractivo />
  */}
  
  
    {/*const [productos] = useState([
      { nombre: "Manzana", precio: 2000 },
      { nombre: "Banano", precio: 800 },
      { nombre: "Naranja", precio: 1000 },
    ]);
  */}