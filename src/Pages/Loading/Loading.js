import React from 'react';

const Loading = () => {
    return (
        <div className=" text-center">
            <h1 className=' text-6xl font-bold text-center' >Loading.... </h1>
            <progress className="progress w-80"></progress>
        </div>
    );
};

export default Loading;