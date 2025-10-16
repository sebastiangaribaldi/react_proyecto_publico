import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from './componentes/Header.jsx'
import Nav from './componentes/Nav.jsx'

import Inicio from './componentes/Inicio.jsx';
import Joyas from './componentes/Joyas.jsx';
import ProductoDetalle from './componentes/ProductoDetalle';
import Carrito from './componentes/Carrito.jsx';

import Footer from './componentes/Footer.jsx'

function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  /*filtramos el producto que queremos eliminar del carrito*/
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  return (
    <>
      <Header />
      <Nav />
      
      <Routes>
        <Route path='/' element={<Inicio agregarProducto={agregarAlCarrito} />}/> 
        <Route path='/joyas' element={<Joyas agregarProducto={agregarAlCarrito} />}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
      </Routes>
      <hr/>
      <Carrito 
        productosEnCarrito={carrito}
        productosEliminados={eliminarDelCarrito}
      />
      <Footer />
    </>
  )
}

export default App
