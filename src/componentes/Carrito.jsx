import Styles from './Carrito.module.css'

const Carrito = ({ productosEnCarrito, productosEliminados }) => {
    return (
      <div className={Styles.productos}>
        <h2>Carrito</h2>
        {productosEnCarrito.map((producto, indice) => (
          <table className={Styles.tabla}>
            <tr>
              <div className={Styles.prod} key={indice}>
              <td>
                <img src={producto.image} alt={producto.title} height={80} width={80} /> 
              </td>
              <td>
                <h4 key={producto.indice}> {producto.title} </h4>
                <h5>$ {producto.price}</h5>
                <button onClick={() => productosEliminados(indice)}>Eliminar</button>
              </td>
              </div>
            </tr>
            </table>  
        ))}
      </div>
    );
  };
  
  export default Carrito; 