import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_iamgebb_Key;

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await response.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // console.log("Doctor :", doctor);
                    // save doctor information
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Doctor ${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                            // form.reset()
                            console.log(result);
                        })

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' flex justify-center items-center '>
            <div className=' w-96 p-4'>
                <h2 className=' text-xl font-bold  text-center'>Add a New Doctor</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    {/* {signUpError && <p className=' text-red-600'>{signUpError}</p>} */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="text"
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
                        <label className="label"><span className="label-text">Specialty</span> </label>
                        <select type="text"
                            {...register("specialty")}
                            className="input input-bordered w-full">
                            {specialties.map((specialty) =>
                                <option key={specialty._id} value={specialty.name}>
                                    {specialty.name}
                                </option>)}
                        </select>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span> </label>
                        <input type="file"
                            name='image'
                            {...register("image", { required: true })}
                            placeholder="Image"
                            className="input input-bordered w-full"
                        />
                        {errors.photo && <p className='text-red-600'>Upload Your Photo</p>}
                    </div>

                    <input className=' mt-3 btn btn-accent form-control w-full' type="submit" value='Add' />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;