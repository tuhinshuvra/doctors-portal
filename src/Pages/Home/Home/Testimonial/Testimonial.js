import React from 'react';
import './Testimonial.css';
import quote from '../../../../assets/icons/quote.svg';
import Review from './Review/Review';
import People1 from '../../../../assets/images/people1.png';
import People2 from '../../../../assets/images/people2.png';
import People3 from '../../../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Birendo Nath',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut? Lorem ipsum dolor sit amet.',
            image: People1,
            location: 'Londhon'
        },
        {
            id: 2,
            name: 'Afzal Hossain',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus! Lorem ipsum dolor sit amet.',
            image: People2,
            location: 'Londhon'
        },
        {
            id: 3,
            name: 'Deman Chandro',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, iste. Lorem ipsum dolor sit amet.',
            image: People3,
            location: 'Londhon'
        },
    ]

    return (
        <section>
            <div className=' flex justify-between md:mx-12 md:mt-24 my-12'>
                <div>
                    <h4 className=' text-primary text-xl font-bold'>Testimonial</h4>
                    <h2 className='lg:text-4xl text-2xl'>What Our Patients Says</h2>

                </div>
                <div>
                    <img className=' lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>
                    )
                }
            </div>
        </section>


    );
};

export default Testimonial;