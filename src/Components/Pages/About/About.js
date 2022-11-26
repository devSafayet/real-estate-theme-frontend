import React from 'react';
import about from '../../../images/about-img.png'
import { FcHome } from 'react-icons/fc';
import { GiSpookyHouse } from 'react-icons/gi';
import { FaLifeRing } from 'react-icons/fa';
import { SiSpringsecurity } from 'react-icons/si';

const About = () => {
    return (
        <div className='container '>
            <div className="grid grid-cols-2 flex justify-center">
                <div>
                    <img src={about} alt="" />
                </div>
                <div className='text-black'>
                    <h6 className='text-3xl font-bold text-primary bg-neutral'>About Us</h6>
                    <h2 className='text-5xl font-bold mb-4'>The Leading Real Estate Rental Marketplace.</h2>
                    <p className='text-base-400 mb-4'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                    <div className='flex gap-4'>
                        <div className=''>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='bg-neutral rounded-full p-3'>
                                    <FcHome />
                                </div>
                                <h6>Smart Home Design</h6>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-neutral rounded-full p-3'>
                                    <GiSpookyHouse />
                                </div>
                                <h6>Exceptional Lifestyle</h6>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='bg-neutral rounded-full p-3'>
                                    <FaLifeRing />
                                </div>
                                <h6>Beautiful Scene Around</h6>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-neutral rounded-full p-3'>
                                    <SiSpringsecurity />
                                </div>
                                <h6>Complete 24/7 Security</h6>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 bg-neutral py-8 pl-6 mb-4'>
                        <p>"Enimad minim veniam quis nostrud exercitation <br />
                            llamco laboris. Lorem ipsum dolor sit amet"</p>
                    </div>
                    <button className='bg-primary text-white px-8 py-4 hover:border-2 hover:border-black hover:text-black hover:bg-white'>OUR SERVICES</button>

                </div>
            </div>

        </div >
    );
};

export default About;