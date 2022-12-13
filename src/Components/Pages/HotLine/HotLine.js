import React from 'react';
import { IoIosCall } from 'react-icons/io';
const HotLine = () => {
    return (
        <div className='mt-8 mb-8 px-16 text-black'>
            <h2 className='text-center text-xl lg:text-3xl font-semibold pb-2 text-primary'>Would You Like</h2>
            <h1 className='text-center text-xl lg:text-4xl font-bold text-primary'>To Have a Cup of Coffee!</h1>

            <div className='lg:flex gap-20' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className='mt-4 m-2 max-w-sm rounded overflow-hidden shadow-sm bg-base-200 px-10 py-8' >
                    <h1 className='pb-2 text-xl text-primary text-center'>Buy Property</h1>
                    <label className='flex items-center'>
                        <div className='text-xl text-primary bg-neutral rounded-full m-auto p-2'>
                            <IoIosCall />
                        </div>
                        <h5>+8801233333</h5>
                    </label>
                </div>
                <div className='mt-4 m-2 max-w-sm rounded overflow-hidden shadow-sm bg-base-200 px-10 py-8' >
                    <h1 className='pb-2 text-xl text-primary text-center'>Land Owners</h1>
                    <label className='flex items-center'>
                        <div className='text-xl text-primary bg-neutral rounded-full m-auto p-2'>
                            <IoIosCall />
                        </div>
                        <h5>+8801233333</h5>
                    </label>
                </div>
                <div className='mt-4 m-2 max-w-sm rounded overflow-hidden shadow-sm bg-base-200 px-10 py-8' >
                    <h1 className='pb-2 text-xl text-primary text-center'>Customer Care</h1>
                    <label className='flex'>
                        <label className='flex items-center'>
                            <div className='text-xl text-primary bg-neutral rounded-full m-auto p-2'>
                                <IoIosCall />
                            </div>
                            <h5>+8801233333</h5>
                        </label>
                    </label>
                </div>
                <div className='mt-4 m-2 max-w-sm rounded overflow-hidden shadow-sm bg-base-200 px-10 py-8' >
                    <h1 className='pb-2 text-xl text-primary text-center'>Interior Design</h1>
                    <label className='flex'>
                        <label className='flex items-center'>
                            <div className='text-xl text-primary bg-neutral rounded-full m-auto p-2'>
                                <IoIosCall />
                            </div>
                            <h5>+8801233333</h5>
                        </label>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default HotLine;