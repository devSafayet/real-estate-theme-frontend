import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiHouse, GiKidSlide } from 'react-icons/gi';
import { IoLibrary, IoBedSharp } from 'react-icons/io5';
import { MdSecurityUpdateGood, MdOutlineMedicalServices } from 'react-icons/md';

const BuildingAminities = () => {
    return (
        <div className='text-black lg:px-16 mb-16 bg-base-200 py-4'>

            <h5 className='text-center mb-6'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Our Aminities</span>
            </h5>

            <h2 className='text-2xl lg:text-4xl font-bold mb-6 text-center'>Building Aminities</h2>

            <div className=''>
                <div className='lg:flex gap-4 mb-4'>
                    <div className="card lg:w-96 bg-base-100 shadow-2xl justify-center hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <AiOutlineCar />
                            </div>
                            <h4 className='text-2xl font-semibold'>Parking Space</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className='card-body text-center'>
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <FaSwimmingPool />
                            </div>
                            <h4 className='text-2xl font-semibold'>Swimming Pool</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <MdSecurityUpdateGood />
                            </div>
                            <h4 className='text-2xl font-semibold'>Private Security</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <MdOutlineMedicalServices />
                            </div>
                            <h4 className='text-2xl font-semibold'>Medical Center</h4>
                        </div>
                    </div>
                </div>
                <div className='lg:flex gap-4'>
                    <div className="card lg:w-96 bg-base-100 shadow-xl justify-center hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <IoLibrary />
                            </div>
                            <h4 className='text-2xl font-semibold'>Library area</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className='card-body text-center'>
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <IoBedSharp />
                            </div>
                            <h4 className='text-2xl font-semibold'>King Size Beds</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <GiHouse />
                            </div>
                            <h4 className='text-2xl font-semibold'>Smart Homes</h4>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl hover:bg-primary mb-2">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <GiKidSlide />
                            </div>
                            <h4 className='text-2xl font-semibold'>Kid's Playand</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildingAminities;