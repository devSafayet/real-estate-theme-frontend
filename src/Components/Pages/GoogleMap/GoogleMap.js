import React from 'react';

const GoogleMap = () => {
    return (
        <div className='px-16'>
            <h5 className='text-center mb-6'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Location</span>
            </h5>

            <div className='mb-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14593.960262226477!2d90.38531044445025!3d23.87223494819851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1670318073360!5m2!1sen!2sbd" frameborder="0" className='w-full h-96'></iframe>
            </div>

        </div>
    );
};

export default GoogleMap;