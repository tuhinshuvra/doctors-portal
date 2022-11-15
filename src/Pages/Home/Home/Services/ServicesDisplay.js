import React from 'react';
import './ServicesDisplay.css'

const ServicesDisplay = ({ service }) => {
    const { name, discription, image } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>

            </div>
        </div>
    );
};

export default ServicesDisplay;