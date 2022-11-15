import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, discription, image, location } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{discription} </p>
                    <div className="card-actions justify-start items-center">
                        <img src={image} className=" w-16" alt="" />
                        <div>
                            <h4>{name}</h4>
                            <h6>{location}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;