
import React from 'react';

const MusicCard = ({ album }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <img src={album.cover_medium} className="card-img-top" alt={album.title} />
                <div className="card-body">
                    <h5 className="card-title">{album.title}</h5>
                    <p className="card-text">{album.artist.name}</p>
                </div>
            </div>
        </div>
    );
};

export default MusicCard;