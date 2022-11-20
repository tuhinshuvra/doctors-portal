import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            return data;
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {

                authorization: `brarer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin Successfully.')
                    refetch()
                }

            })

    }

    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} Deleted Successfully!`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className=' text-center font-bold text-lg'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>


                                <tr className="hover" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className=" btn btn-sm btn-primary">Make Admin</button>}</td>
                                    <td> <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                </tr>
                            )
                        }

                    </tbody>
                    {
                        deletingUser &&
                        <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete user ${deletingUser.name} its can't undone`}
                            successAction={handleDeleteUser}
                            successButtonName="Delete"
                            modalData={deletingUser}
                            closeModal={closeModal}
                        ></ConfirmationModal>
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUsers;