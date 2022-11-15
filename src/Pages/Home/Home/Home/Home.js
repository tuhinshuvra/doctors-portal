import React from 'react';
import Banner from '../../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import './Home.css';
import Services from '../Services/Services';
import ExceptionalCare from './ExceptionalCare/ExceptionalCare';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=' mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;