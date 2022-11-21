import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logout } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.log(error))
    }

    return (
        <div className=' text-center  mx-auto my-24 '>
            <h2 className=' text-red-600 font-bold text-3xl text-center lg:my-6'>Something Went Wrong!!!</h2>
            <p className=' text-red-600 lg:my-6'>{error.statusText || error.message}</p>
            <Link to='/' className=' text-xl text-bold '>Please   <button className='btn btn-sm' onClick={handleLogout}>LogOut</button>  and Login again</Link>
        </div>
    );
};

export default DisplayError;