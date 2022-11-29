import React from 'react';
import './Contact.css';
import { CgMail } from 'react-icons/cg';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';


const Contact = () => {
    return (
        <div className="contact mx-16">
            <div className="">
                <div className="title text-4xl text-center mb-6">
                    <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Contact us form</span>

                </div>
                <div className="contact-form lg:grid grid-cols-2">
                    <div className='text-black mt-8 m-auto'>
                        <div className='flex gap-1 items-center mb-4'>
                            <span className='text-primary'>
                                <IoLocationOutline />
                            </span>
                            <h3 className='text-xl font-semibold'>H-33, R-15, Sector-11, Uttara, Dhaka-1230 </h3>
                        </div>
                        <div className='flex gap-1 items-center mb-4'>
                            <span className='text-primary'>
                                <IoCallOutline />
                            </span>
                            <h3 className='text-xl font-semibold'>+880963-8557887</h3>
                        </div>
                        <div className='flex gap-1 items-center mb-4'>
                            <span className='text-primary text-xl'>
                                <CgMail />
                            </span>
                            <h3 className='text-xl font-semibold'>info@gmail.com</h3>
                        </div>
                    </div>
                    <div className="input-fields">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="text" className="input" placeholder="Email Address" />
                        <textarea className="border-2 px-2 pt-2 border-primary rounded-xl w-full" placeholder="Message" />
                        <br />
                        <button className="btn bg-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;