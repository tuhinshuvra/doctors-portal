import React from 'react';
import './InfoCardDisplay.css';

const InfoCardDisplay = ({ card }) => {
    const { name, discription, image, bgClass } = card;
    return (
        <div className={`card   ${bgClass}  md:card-side shadow-xl px-3 py-2`}>
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default InfoCardDisplay;