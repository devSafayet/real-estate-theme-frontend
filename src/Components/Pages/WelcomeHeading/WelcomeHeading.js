import React from 'react';
import aboutGroup from '../../../images/about-group.jpg';

const WelcomeHeading = () => {
    return (
        <div className='my-8 px-16 grid grid-cols-2 base-100'>
            <div className='text-black mt-4'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>About Group</span>
                <p className='mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim rem vel repellat. Itaque, adipisci repellat? Voluptatibus eos a nesciunt labore? Laudantium fugit ducimus earum, blanditiis perspiciatis aliquid voluptas adipisci placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea corrupti, esse facere soluta molestiae obcaecati beatae similique vero cupiditate quas autem odio eligendi facilis neque! Incidunt amet omnis quas. </p>
            </div>
            <div className=''>
                <img className='rounded' src={aboutGroup} alt="" />
            </div>
        </div>
    );
};

export default WelcomeHeading;