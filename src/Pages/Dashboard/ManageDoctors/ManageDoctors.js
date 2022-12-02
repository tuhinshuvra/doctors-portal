import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }



    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const response = await fetch('https://doctors-portal-server-omega-liard.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await response.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    const handleDeleteDoctor = (doctor) => {
        fetch(`https://doctors-portal-server-omega-liard.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${doctor.name} Deleted Successfully!`);
                    refetch();
                }
            }

            )
    }



    return (
        <div>
            <h2 className=' text-xl font-bold my-2'>Manage Doctors: 01</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>SPECIALITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => <tr key={doctor._id} className=' hover'>
                            <th>{`0${index + 1}`}</th>
                            <th>
                                <div className="avatar">
                                    <div className="mask mask-circle w-12 h-12">
                                        <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </th>
                            <td>{doctor.name} </td>
                            <td>{doctor.specialty} </td>
                            <td> <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                        </tr>)}

                    </tbody>
                    {
                        deletingDoctor &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete doctor ${deletingDoctor.name} its can't undone`}
                            successAction={handleDeleteDoctor}
                            successButtonName="Delete"
                            modalData={deletingDoctor}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    }
                </table>
            </div>


        </div >
    );
};

export default ManageDoctors;