import React from 'react';
import { MdOutlineBedroomChild, MdOutlineBathroom } from 'react-icons/md';
import { AiOutlineSlackSquare } from 'react-icons/ai';
import { RiUser3Fill } from 'react-icons/ri';
import { BsFillTagsFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogs1 from '../../../images/bolgs-1.jpg';
const NewsAndBlogs = () => {
    return (
        <div className='px-16 m-auto text-black mb-8 mt-16'>
            <h2 className='text-center mb-4'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>About Us</span>
            </h2>

            <h5 className='text-3xl font-bold my-4 text-center'>Leatest News Feeds</h5>

            <div className='lg:flex  gap-6'>
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 pb-2">
                    <img class="w-full " src={blogs1} alt="Sunset in the mountains" />
                    <div class="px-6 pt-4 pb-2">

                        <div className='lg:flex gap-2'>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <RiUser3Fill />
                                </span>
                                <h6 className='hover:text-primary'>by:Admin</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Interior,</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Decorate</h6>
                            </button>
                        </div>

                        <div>
                            <button className='text-2xl font-bold hover:text-primary'>The Most Inspiring Interior Design Of 2021</button>
                        </div>

                    </div>
                    <div className="divider text-black"></div>
                    <div className='flex justify-between px-6 mb-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-primary'>
                                <SlCalender />
                            </span>
                            <h6>June 24,2022</h6>
                        </div>
                        <div className='text-primary'>
                            <button className='text-semibold'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 pb-2">
                    <img class="w-full " src={blogs1} alt="Sunset in the mountains" />
                    <div class="px-6 pt-4 pb-2">

                        <div className='lg:flex gap-2'>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <RiUser3Fill />
                                </span>
                                <h6 className='hover:text-primary'>by:Admin</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Interior,</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Decorate</h6>
                            </button>
                        </div>

                        <div>
                            <button className='text-2xl font-bold hover:text-primary'>The Most Inspiring Interior Design Of 2021</button>
                        </div>

                    </div>
                    <div className="divider text-black"></div>
                    <div className='flex justify-between px-6 mb-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-primary'>
                                <SlCalender />
                            </span>
                            <h6>June 24,2022</h6>
                        </div>
                        <div className='text-primary'>
                            <button className='text-semibold'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 pb-2">
                    <img class="w-full " src={blogs1} alt="Sunset in the mountains" />
                    <div class="px-6 pt-4 pb-2">

                        <div className='lg:flex gap-2'>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <RiUser3Fill />
                                </span>
                                <h6 className='hover:text-primary'>by:Admin</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Interior,</h6>
                            </button>
                            <button className='flex justify-center items-center gap-1'>
                                <span className='text-primary'>
                                    <BsFillTagsFill />
                                </span>
                                <h6 className='hover:text-primary'>Decorate</h6>
                            </button>
                        </div>

                        <div>
                            <button className='text-2xl font-bold hover:text-primary'>The Most Inspiring Interior Design Of 2021</button>
                        </div>

                    </div>
                    <div className="divider text-black"></div>
                    <div className='flex justify-between px-6 mb-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-primary'>
                                <SlCalender />
                            </span>
                            <h6>June 24,2022</h6>
                        </div>
                        <div className='text-primary'>
                            <button className='text-semibold'>READ MORE</button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default NewsAndBlogs;