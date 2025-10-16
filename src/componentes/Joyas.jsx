import ProductosJoyas from './ProductosJoyas';

const Joyas = ({ agregarProducto }) => {
    return(
      <>
      <h2>Productos de Joyas</h2>
      <ProductosJoyas agregarProducto={agregarProducto} />
      </>
    );
  }
  
  export default Joyas;