import Styles from './Carrito.module.css'

const Carrito = ({ productosEnCarrito, productosEliminados }) => {
  return (
    <div className={Styles.carritoContainer}>
      <h2>Lista de Comrpas</h2>
      {productosEnCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        productosEnCarrito.map((producto, indice) => (
          <div className={Styles.carritoItem} key={indice}>
            <img className={Styles.itemImagen} src={producto.image} alt={producto.title} />
            <div className={Styles.itemDetalles}>
              <h4>{producto.title}</h4>
              <h5>$ {producto.price}</h5>
            </div>
            <button className={Styles.botonEliminar} onClick={() => productosEliminados(indice)}>Eliminar</button>
          </div>
        )))}
    </div>
  );
};

export default Carrito;