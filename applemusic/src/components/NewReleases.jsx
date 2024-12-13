
import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';

const NewReleases = () => {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        // Fetch delle nuove uscite dall'API Deezer
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=new')
            .then(response => response.json())
            .then(data => setNewReleases(data.data.slice(0, 8))) // Limita a 8 risultati per esempio
            .catch(error => console.log(error));
    }, []);

    return (
        <section className="container mt-4">
            <h2>Nuove Uscite</h2>
            <div className="row">
                {newReleases.map(album => (
                    <MusicCard key={album.id} album={album} />
                ))}
            </div>
        </section>
    );
};

export default NewReleases;