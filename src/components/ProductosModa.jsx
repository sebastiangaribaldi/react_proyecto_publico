import { useState, useEffect } from 'react';
import Styles from './Productos.module.css'

const ProductosModa = () => {
  
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

  if (cargando) return <h4>Cargando productos MODA...</h4>;
  if (error) return error;

  const prodCat = productos.filter((producto, indice) => producto.category.includes('clothing'))

  return(
    <div className={Styles.productos}>
        {prodCat.map((producto) => (
            <div className={Styles.prod} key={producto.id}>
                <img src={producto.image} height={80} width={80}/>
                <h4>{producto.title}</h4>
                <h2>$ {producto.price}</h2>
            </div>
        ))}
    </div>
  );
};
export default ProductosModa;