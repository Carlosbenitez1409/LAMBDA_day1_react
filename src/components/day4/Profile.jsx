import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => setCharacter(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!character) return <p className="text-center">Cargando...</p>;

    return (
        <div className="p-6 text-center">
            <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline">
                Volver
            </button>
            <h1 className="text-3xl font-bold my-4">{character.name}</h1>
            <img src={character.image} alt={character.name} className="w-40 h-40 mx-auto rounded-full" />
            <p className="text-lg mt-2">Estado: {character.status}</p>
            <p className="text-lg">Especie: {character.species}</p>
            <p className="text-lg">Origen: {character.origin.name}</p>
        </div>
    );
}

export default Profile;
