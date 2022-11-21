import React, { useContext } from 'react';
import { format } from 'date-fns';
import './BookingModal.css';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, price, slots } = treatment; // treatment is appointment option just different name.
    const date = format(selectedDate, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            price,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed.')
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })
        // and  once data is saved close the modal 
        // and display success toast
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            {format(selectedDate, 'PP')}
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" placeholder="Type here" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required /> <br />
                        <input className=' w-full btn btn-sm btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;