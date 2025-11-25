//  const URL = 'https://69162780a7a34288a27c82d0.mockapi.io/api/Productos';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext"; 
import Style from './Productos.module.css';

const Productos = () => {
  
  // Usamos los contextos de productos y carrito
  const { productos, setSelectedProductId, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  return(
    <div className={Style.contenedor}>
      {productos.map((producto) => (
        <div key={producto.id}>
          <div  className={Style.itm_producto}>
            <div className={Style.imagen}>
              <img src={producto.imagen} height={100} width={100}/>
            </div>
            <div>
              <div className={Style.nombre}>
                {producto.nombre}
              </div>
              <div className={Style.descripcion}>
                {producto.descripcion}  
              </div> 
              <div className={Style.precio}>
                $ {producto.precio}
               </div>
            </div>    
            <div>
              <Link to={`/productos/${producto.id}` } onClick={() => setSelectedProductId(producto.id)}>Detalles</Link>
            </div>
            <div>
              <button onClick={() => agregarAlCarrito(producto)} className={Style.btnAgregar}>Agregar</button>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Productos;

/*
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} : {producto.precio}$
            <img src={producto.imagen} height={80} width={80}/>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            <Link to={`/productos/${producto.id}` } onClick={() => setSelectedProductId(producto.id)}>Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
*/