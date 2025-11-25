import { useState, useEffect } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductosContext";
import styles from "./GestionProducto.module.css";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon"; 

const GestionProductos = () => {
  // Cargando contexto de producto
  const { productos, eliminarProducto } = useProductosContext();
  // Estados 
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Abrir formulario para AGREGAR
  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null); // Sin producto inicial
    setMostrarForm(true);
  };

  // Abrir formulario para EDITAR
  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto); // Pasar el producto a editar
    setMostrarForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  return (
      <div className={styles.container}>
        <h1>Gestión de Productos</h1>
        <div className={styles.cabecera}>
          <h2>Lista de Productos</h2>
          {/* Botón para agregar producto */}
          <button
            onClick={abrirFormularioAgregar}
            className={styles.botonAgregar}
          >
            <CirclePlus />
            <p>Agregar Producto</p>
          </button>
        </div>
        {/* Lista de productos */}
        <div>
          {productos.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div className={styles.contenedor}>
              {productos.map((producto) => (
                <div key={producto.id} className={styles.itm_producto}>
                  <div className={styles.imagen}>
                    <img src={producto.imagen} height={100} width={100} alt={producto.nombre}/>
                  </div>
                  <div>
                    <div className={styles.nombre}>
                      {producto.nombre}
                    </div>
                    <div className={styles.descripcion}>
                      {producto.descripcion}  
                    </div> 
                    <div className={styles.precio}>
                      $ {producto.precio}
                    </div>
                  </div>
                  {/* Botones para editar y eliminar este producto */}
                  <button 
                    className={styles.boton}
                    onClick={() => abrirFormularioEditar(producto)}
                  >
                   <SquarePen />
                  </button>
                  <button 
                    className={styles.boton} 
                    onClick={() => eliminarProducto(producto.id)}
                  >
                   <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal - Formulario condicional */}
        {mostrarForm && (
          <>
              {/* Pasar los props correctos según el modo */}
              <FormProducto
                productoInicial={productoSeleccionado || {}}
                modo={modoFormulario}
                onCerrar={cerrarFormulario}
              />
          </>
        )}
      </div>
  );
};

export default GestionProductos;