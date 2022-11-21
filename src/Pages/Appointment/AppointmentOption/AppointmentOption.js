import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import './AppointmentOption.css';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption
    return (
        <div className="card shadow-2xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl font-bold">{name}</h2>
                <p>Price - ${price}</p>
                <p>{slots.length > 0 ? slots[0] : 'Please! try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? `spaces` : 'space'} available</p>
                <div className="">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn bg-primary text-white uppercase border-none"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;