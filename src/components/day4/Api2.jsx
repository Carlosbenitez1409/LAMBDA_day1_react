import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import React from 'react'

function Api() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => setCharacters(data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Personajes de Rick and Morty</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {characters.map((char) => (
                    <li key={char.id} className="p-4 border rounded-lg shadow-md">
                        <img src={char.image} alt={char.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{char.name}</h2>
                        <Link
                            to={`/perfil/${char.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Ver perfil
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api


