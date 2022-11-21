import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.qmail],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })
    return (
        <div>
            <h2 className=' font-bold text-lg text-center my-4'>My appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((book, index) =>

                                <tr key={book._id} className=" hover">
                                    <th>{index + 1}</th>
                                    <td>{book.patient}</td>
                                    <td>{book.phone}</td>
                                    <td>{book.treatment}</td>
                                    <td>{book.appointmentDate}</td>
                                    <td>{book.slot}</td>
                                    <td>
                                        {
                                            book.price && !book.paid && <Link
                                                to={`/dashboard/payment/${book._id}`}>
                                                <button className=' btn btn-primary btn-sm'
                                                >Pay</button></Link>
                                        }
                                        {
                                            book.price && book.paid && <span
                                                className=' btn btn-success btn-sm'
                                            >Paid</span>
                                        }
                                    </td>
                                    {/* <td>${book.price}</td> */}
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppointment;