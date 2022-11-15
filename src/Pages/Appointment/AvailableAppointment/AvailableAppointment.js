import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './AvailableAppointment.css';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(response => response.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <section className=' mt-16'>
            <p className=' text-center text-primary'><b>Available Appointments on {format(selectedDate, 'PP')}</b></p>

            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    appointmentOption.map(option =>
                        <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>
                    )
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;