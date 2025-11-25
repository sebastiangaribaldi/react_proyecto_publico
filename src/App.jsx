
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Moda from './pages/Moda';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto.jsx';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import Carrito from './components/Carrito.jsx' 
import ProductosLista from './pages/Productos.jsx';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  const cerrarSesion = () => setisAuthenticated(false);
  const iniciarSesion = () => setisAuthenticated(true);

 // const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/productos' element={<ProductosLista/>}/> 
        <Route path='/moda' element={<Moda/>}/> 
        <Route path='/productosDetalle/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
        <Route path={'/login'} element={<Login/>} />
        <Route path="/carrito" element={
            <RutaProtegida >
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route path={'/admin'} element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin/>
            </RutaProtegida>} 
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
