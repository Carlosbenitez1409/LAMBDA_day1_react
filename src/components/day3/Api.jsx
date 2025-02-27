/*import { useState, useEffect } from 'react';
import axios from 'axios';
import { requestFormReset } from 'react-dom';

import React from 'react'

function Api() {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState({});
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character?page=1');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data.results);
                setInfo(response.data.info);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [url]);

    return (
        <div>
            {data.map((character) => (
                <div
                    className='flex my-8 items-center justify-center font-[Popins] bg-neutral-300 mx-28 rounded-md cursor-auto'
                    key={character.id}>
                    <img src={character.image} alt="" className='w-[10rem] rounded-full' />
                    <div className='ml-5'>
                        <h2 className='font-bold text-2xl'>{character.name}</h2>
                        <p>status: {character.status}</p>
                        <p>status: {character.species}</p>
                        <p>status: {character.gender}</p>
                    </div>
                </div>
            ))}
            <div className='flex items-center justify-center my-4'>
                <nav className='flex rounded-md shadow'>
                    <a href="#" className='py-2 px-4 bg-gray-200 text-gray-700 rounded-l-md'onClick={()=> setUrl(info.prev)}>
                        Anterior
                    </a>
                    <a href="#" className='py-2 px-4 bg-gray-200 text-gray-700 rounded-r-md' onClick={()=> setUrl(info.next)}>
                        Siguiente
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Api

*/
