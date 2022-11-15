import React from 'react';
import './Services.css'
import ServicesDisplay from './ServicesDisplay';
import Fluoride from '../../../../assets/images/fluoride.png';
import Cavity from '../../../../assets/images/cavity.png';
import Whitening from '../../../../assets/images/whitening.png';

const Services = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut?',
            image: Fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus!',
            image: Cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, iste.',
            image: Whitening,
        },
    ]
    return (
        <div className=' mt-20 mx-auto'>
            <div>
                <h3 className=' text-center text-xl text-primary font-bold uppercase'>OUR SERVICES</h3>
                <h2 className=' text-center text-4xl  '>Services We Provide</h2>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cardData.map(service =>
                        <ServicesDisplay
                            key={service.id}
                            service={service}
                        ></ServicesDisplay>
                    )
                }
            </div>
        </div>
    );
};

export default Services;