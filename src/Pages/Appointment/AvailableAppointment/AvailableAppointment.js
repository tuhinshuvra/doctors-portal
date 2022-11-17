import React, { useEffect, useState } from 'react';
import { format, refetch } from 'date-fns';
import './AvailableAppointment.css';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        // queryFn: () => fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(response => response.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className=' mt-16'>
            <p className=' text-center text-primary'><b>Available Appointments on {format(selectedDate, 'PP')}</b></p>

            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    appointmentOptions.map(option =>
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;