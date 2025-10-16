import ProductosElectronica from './ProductosElectronica';

const Inicio = ({ agregarProducto }) => {
  return(
    <>
      <h2>Productos de Electronica</h2>
      <ProductosElectronica agregarProducto={agregarProducto}/>
    </>
  );
}

export default Inicio;
