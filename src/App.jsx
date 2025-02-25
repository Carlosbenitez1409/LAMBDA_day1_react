import { useState } from 'react';
import './App.css';
import Bienvenida from './components/day1/Bienvenida';
import ListaProductos from './components/day1/ListaProductos';
import Counter from './components/day2/Counter';
import FormularioInteractivo from './components/day2/FormularioInteractivo';

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
      <h2 className="flex justify-center items-center max-w-screen mt-4">Contador con React y Vite</h2>
      <Counter />
      <h2 className="flex justify-center items-center max-w-screen mt-4">Formulario interactivo</h2>
      <FormularioInteractivo />
    </>
  );
}

export default App;
