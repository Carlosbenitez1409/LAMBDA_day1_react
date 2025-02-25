import { useState } from 'react';

const FormularioInteractivo = () => {
    const [nombre, setNombre] = useState('');

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <input
                type="text"
                placeholder="Escribe tu nombre"
                className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <p className="text-lg font-semibold">
                {nombre ? `Hola, ${nombre}! ` : 'Escribe tu nombre arriba '}
            </p>
        </div>
    );
};

export default FormularioInteractivo;
