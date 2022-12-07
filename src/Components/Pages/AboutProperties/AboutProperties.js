import React from 'react';
import aboutProperties from "../../../images/AboutProperties.png"
import { MdOutlineBedroomChild, MdOutlineBathroom, MdDirectionsCarFilled } from 'react-icons/md';
import { AiOutlineSlackSquare, AiOutlineMinus } from 'react-icons/ai';
import img1 from '../../../images/Properties-img1.jpg'
import img2 from '../../../images/Properties-img2.jpg'
import img3 from '../../../images/Properties-img-3.jpg'


const AboutProperties = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-2 text-black px-16 bg-base-200 pt-4">
                <div>
                    <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>About Us</span>

                    <h1 className='text-2xl lg:text-5xl font-bold mb-6 mt-6'>Today Sells Properties</h1>

                    <p className='mb-6'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>

                    <div className='flex items-center gap-2 mb-2'>
                        <span className='text-primary text-2xl'>
                            <AiOutlineMinus />
                        </span>
                        <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <span className='text-primary text-2xl'>
                            <AiOutlineMinus />
                        </span>
                        <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <span className='text-primary text-2xl'>
                            <AiOutlineMinus />
                        </span>
                        <h5 className='mb-2'>Our SecretIsland Boat Tour is Just for You</h5>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <span className='text-primary text-2xl'>
                            <AiOutlineMinus />
                        </span>
                        <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <span className='text-primary text-2xl'>
                            <AiOutlineMinus />
                        </span>
                        <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    </div>

                    <div className='lg:flex gap-2'>
                        <div className='flex gap-1'>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <h6>3</h6>
                                    <MdOutlineBedroomChild />
                                </div>
                                <h6>Bedrooms</h6>
                            </div>
                            <div className="border-r-2"></div>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <h6>2</h6>
                                    <MdOutlineBathroom />
                                </div>
                                <h6>bathrooms</h6>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className="border-r-2"></div>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <h6>2</h6>
                                    <MdDirectionsCarFilled />
                                </div>
                                <h6>Car parking
                                </h6>
                            </div>
                            <div className="border-r-2"></div>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <h6>3450</h6>
                                    <AiOutlineSlackSquare />
                                </div>
                                <h6>square Ft</h6>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 gap-2 py-12 px-2'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div>
                    <img src={aboutProperties} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutProperties;