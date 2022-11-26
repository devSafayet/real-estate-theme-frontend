import React from 'react';
import aboutProperties from "../../../images/AboutProperties.png"
import { MdOutlineBedroomChild, MdOutlineBathroom, MdDirectionsCarFilled } from 'react-icons/md';
import { AiOutlineSlackSquare } from 'react-icons/ai';
import img1 from '../../../images/Properties-img1.jpg'
import img2 from '../../../images/Properties-img2.jpg'
import img3 from '../../../images/Properties-img-3.jpg'


const AboutProperties = () => {
    return (
        <div>
            <div className="grid grid-cols-2 text-black px-16">
                <div>
                    <h6 className='text-primary bg-neutral mb-4'>About Us</h6>
                    <h1 className='text-5xl font-bold mb-4'>Today Sells Properties</h1>
                    <p className='mb-4'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                    <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    <h5 className='mb-2'>Live Music Cocerts at Luviana</h5>
                    <div className='flex gap-2'>
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
                    <div className='grid grid-cols-3 gap-2 mt-4'>
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