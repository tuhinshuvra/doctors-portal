import React from 'react';
import './MakeAppoinment.css'
import Doctor from '../../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../../components/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section>
            <div className="appointment hero mt-24 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Doctor} className=" -mt-20 max-w-sm hidden md:block rounded-lg shadow-2xl md:w-1/2" alt='' />
                    <div className='md:w-1/2  text-white'>
                        <h4 className="text-lg font-bold text-primary">Appointment</h4>
                        <h1 className="md:text-3xl sm:text-xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;