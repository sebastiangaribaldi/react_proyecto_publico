import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { AuthProvider } from "./context/AuthContext";
import { ProductosProvider } from './context/ProductosContext'; 
import { SearchProvider } from "./context/BusquedaContext"; 


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <SearchProvider>
            <CarritoProvider>
              <App />
            </CarritoProvider>
          </SearchProvider>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);