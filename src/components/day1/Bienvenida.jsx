import "./Bienvenida.css";

const Bienvenida = ({ nombre }) => {
    return <h1 className="bienvenida">¡Bienvenido, {nombre}!</h1>;
};

export default Bienvenida;
