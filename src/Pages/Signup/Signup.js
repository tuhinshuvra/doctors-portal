import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Signup.css'

const Signup = () => {
    const [signUpError, setSignUpError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
        console.log(errors);

        createUser(data.email, data.password)
            .then((result) => {
                setSignUpError('')
                const user = result.user;
                toast.success('User Created Successfully')
                console.log("User Info:", user);

                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        // const user = result.user;
                        toast.success('User data updated successfully.')
                        // console.log(user);
                    })
                    .catch(error => {
                        console.log(error)
                        setSignUpError(error.message)
                    })
            })
            .catch(error => console.log(error))
    }



    return (
        <div className=' flex justify-center items-center '>
            <div className=' w-96 p-4'>
                <h2 className=' text-xl font-bold  text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    {signUpError && <p className=' text-red-600'>{signUpError}</p>}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="name"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>Name is required</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email"
                            name='email'
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-600'>Email is required</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input
                            type="password"
                            name='password'
                            {...register("password",
                                {
                                    required: true,
                                    minLength: { value: 6, message: "Password length must be minimum 6" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                },
                            )}

                            placeholder="Password"
                            className="input input-bordered w-full"
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='SingUp' />
                    <p className=' my-3 text-center'> <b> Already have an account?</b> <Link to='/login'> <span className=' text-primary'>Go to login</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;