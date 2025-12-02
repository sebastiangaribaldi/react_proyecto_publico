
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import ProductoDetalle from './pages/ProductoDetalle';

import Nosotros from './pages/Nosotros.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import Carrito from './components/Carrito.jsx';
import Catalogo from './pages/Catalogo.jsx';
import ResultadosBusqueda from "./components/ResultadosBusqueda.jsx";



function App() {

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">

      <Header />

      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/catalogo' element={<Catalogo/>}/> 
        
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path="/busqueda" element={<ResultadosBusqueda />} />        
        <Route path='/nosotros' element={<Nosotros/>}/> 
        <Route path={'/login'} element={<Login/>} />
        <Route path="/carrito" element={
            <RutaProtegida >
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route path={'/admin'} element={
          <RutaProtegida> 
              <Admin/>
            </RutaProtegida>} 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

