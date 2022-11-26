import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiHouse, GiKidSlide } from 'react-icons/gi';
import { IoLibrary, IoBedSharp } from 'react-icons/io5';
import { MdSecurityUpdateGood, MdOutlineMedicalServices } from 'react-icons/md';

const BuildingAminities = () => {
    return (
        <div className='text-black px-16 mb-12'>
            <h5 className='text-center text-primary bg-neutral m-auto rounded mb-4'>Our Aminities</h5>
            <h2 className='text-4xl font-bold mb-4 text-center'>Building Aminities</h2>
            <div className=''>
                <div className='flex gap-4 mb-4'>
                    <div className="card w-96 shadow-2xl justify-center">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <AiOutlineCar />
                            </div>
                            <h4 className='text-2xl font-semibold'>Parking Space</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className='card-body text-center'>
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <FaSwimmingPool />
                            </div>
                            <h4 className='text-2xl font-semibold'>Swimming Pool</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <MdSecurityUpdateGood />
                            </div>
                            <h4 className='text-2xl font-semibold'>Private Security</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <MdOutlineMedicalServices />
                            </div>
                            <h4 className='text-2xl font-semibold'>Medical Center</h4>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className="card w-96 shadow-2xl justify-center">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <IoLibrary />
                            </div>
                            <h4 className='text-2xl font-semibold'>Library area</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className='card-body text-center'>
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <IoBedSharp />
                            </div>
                            <h4 className='text-2xl font-semibold'>King Size Beds</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <div className='text-6xl text-primary bg-neutral rounded-full m-auto p-4'>
                                <GiHouse />
                            </div>
                            <h4 className='text-2xl font-semibold'>Smart Homes</h4>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
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