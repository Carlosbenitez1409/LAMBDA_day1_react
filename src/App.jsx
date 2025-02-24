import { useState } from 'react';
import './App.css';
import Bienvenida from './components/Bienvenida';
import ListaProductos from './components/ListaProductos';

function App() {
  const [productos] = useState([
    { nombre: "Manzana", precio: 2000 },
    { nombre: "Banano", precio: 800 },
    { nombre: "Naranja", precio: 1000 },
  ]);

  return (
    <>
      <Bienvenida nombre="Carlos" />
      <ListaProductos productos={productos}/>
    </>
  );
}

export default App;
