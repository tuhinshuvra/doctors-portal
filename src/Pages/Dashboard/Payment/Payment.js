import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckOutForm from './CheckOutForm/CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log("stripePromise : ", stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    const { appointmentDate, treatment, patient, price, slot, email, phone } = booking;

    return (
        <div className=' font-bold my-16'>
            <h2>Payment for {treatment}</h2>
            <h2>Please pay <b>${price}</b> for your appointment on {appointmentDate} at {slot}</h2>

            <div className=" w-96 my-11">
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;