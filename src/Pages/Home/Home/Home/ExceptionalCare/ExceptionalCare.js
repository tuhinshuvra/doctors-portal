import React from 'react';
import './ExceptionalCare.css';
import Treatment from '../../../../../assets/images/treatment.png';
import PrimaryButton from '../../../../../components/PrimaryButton';

const ExceptionalCare = () => {
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl lg:gap-24 lg:mx-28 mt-24">
            <figure className=' md:w-1/2'><img className=' lg:w-[400px]  rounded-lg' src={Treatment} alt="Album" /></figure>
            <div className="card-body md:w-1/2  p-0">
                <h2 className="card-title lg:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions">
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>


    );
};

export default ExceptionalCare;