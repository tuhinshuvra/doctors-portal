import React from 'react';
import './InfoCards.css';

import Clock from '../../../../assets/icons/clock.svg';
import Marker from '../../../../assets/icons/marker.svg';
import Phone from '../../../../assets/icons/phone.svg';
import InfoCardDisplay from './InfoCardDisplay';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            discription: 'Lorem ipsum dolor sit amet consectetur.',
            image: Clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            discription: 'Brooklyn, NY 10036, United States',
            image: Marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            discription: '+000 123 456789',
            image: Phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]


    return (
        <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                cardData.map(card => <InfoCardDisplay
                    key={card.id}
                    card={card}
                ></InfoCardDisplay>)
            }
        </div>
    );
};

export default InfoCards;