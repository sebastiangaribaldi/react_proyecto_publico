import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from './ProductosElectronica.module.css'

const ProductosJoyas = ({ agregarProducto }) => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      });
  },[]);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  const prodCat = productos.filter((producto, indice) => producto.category.includes('jewelery'))

  return(
    <div className={Styles.productos}>
        {prodCat.map((producto) => (
      <div className={Styles.productosItems} key={producto.id}>
                <Link to={`/productos/${producto.id}`} className={Styles.productLink}>
                    <img src={producto.image} alt={producto.title} height={80} width={80}/>
                    <h4>{producto.title}</h4>
                    <h2>$ {producto.price}</h2>
                </Link>
                <button className={Styles.botonAgregar} onClick={() => agregarProducto(producto)}>Comprar</button>
            </div>
        ))}
    </div>
  );
};
export default ProductosJoyas;