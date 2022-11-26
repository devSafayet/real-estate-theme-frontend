import React from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { MdOutlineApartment, MdBedroomParent, MdOutlineConstruction } from 'react-icons/md';
import CountUp from 'react-countup';

const CountDown = () => {
    return (
        <div className=' my-16 bg-base-200 h-96 text-black grid grid-cols-4 items-center'>
            <div className='text-center m-auto'>
                <div className='text-8xl text-primary'>
                    <AiOutlineAreaChart />
                </div>
                <h1 className='text-4xl font-bold'>
                    <CountUp end={560} />
                    +</h1>
                <h4 className=''>Total Area sq</h4>
            </div>
            <div className='text-center m-auto'>
                <div className='text-8xl text-primary'>
                    <MdOutlineApartment />
                </div>
                <h1 className='text-4xl font-bold'><CountUp end={197} />K+</h1>
                <h4 className=''>Apartments Sold</h4>
            </div>
            <div className='text-center m-auto'>
                <div className='text-8xl text-primary'>
                    <MdOutlineConstruction />
                </div>
                <h1 className='text-4xl font-bold'><CountUp end={268} />+</h1>
                <h4 className=''>Total Constructions</h4>
            </div>
            <div className='text-center m-auto'>
                <div className='text-8xl text-primary'>
                    <MdBedroomParent />
                </div>
                <h1 className='text-4xl font-bold'><CountUp end={340} />+</h1>
                <h4 className=''>Apartio Rooms</h4>
            </div>
        </div>
    );
};

export default CountDown;