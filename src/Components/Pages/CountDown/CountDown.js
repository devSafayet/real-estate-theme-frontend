import React from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { MdOutlineApartment, MdBedroomParent, MdOutlineConstruction } from 'react-icons/md';
import CountUp from 'react-countup';

const CountDown = () => {
    return (
        <div className='py-20 my-12 bg-base-200 text-black lg:grid grid-cols-2'>
            <div className='flex pb-4'>
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
            </div>
            <div className='flex'>
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
        </div>
    );
};

export default CountDown;