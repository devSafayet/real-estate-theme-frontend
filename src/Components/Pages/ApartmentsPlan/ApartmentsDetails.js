import React from 'react';
import apartment from '../../../images/Apartment-grap.png';

const ApartmentsDetails = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-primary text-white p-16'>
                    <h1 className='text-4xl font-bold mb-8 mt-4'>Top Garden</h1>
                    <p className='mb-6'>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                    <h4 className='text-xl'>Total Area ----------------------- 2800 Sq. Ft</h4>
                    <h4 className='text-xl'>Bedroom ----------------------- 150 Sq. Ft</h4>
                    <h4 className='text-xl'> Bathroom ----------------------- 45 Sq. Ft</h4>
                    <h4 className='text-xl'>Belcony/Pets ---------------- Allowed</h4>
                    <h4 className='text-xl'>Lounge ----------------------- 650 Sq. Ft</h4>
                </div>
                <div>
                    <img src={apartment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ApartmentsDetails;