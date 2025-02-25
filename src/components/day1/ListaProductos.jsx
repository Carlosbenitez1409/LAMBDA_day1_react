import "./ListaProductos.css";

const ListaProductos = ({ productos }) => {
    return (
        <div className="productos-container">
            <h2>Lista de Productos</h2>
            <div className="productos-grid">
                {productos.map((producto, index) => (
                    <div key={index} className="producto-card">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <button>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProductos;
