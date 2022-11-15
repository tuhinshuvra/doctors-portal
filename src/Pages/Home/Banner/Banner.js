import React from 'react';
import './Banner.css'
import Chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton';


const Banner = () => {
    return (
        <div className="banner hero">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-9">
                <img src={Chair} className="rounded-lg  lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="lg:text-5xl text-lg  font-bold">Your New Smile Starts Here</h1>

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <div className=' text-center md:text-left '>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;