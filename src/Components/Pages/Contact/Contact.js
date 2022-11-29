import React from 'react';
import './Contact.css';
import img from '../../../images/about-group.jpg';

const Contact = () => {
    return (
        <div className="contact mx-16">
            <div className="">
                <div className="title text-4xl text-center mb-6">
                    <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Contact us form</span>

                </div>
                <div className="contact-form flex">
                    <div className='img'>
                        <img className='rounded-xl' src={img} alt="" />
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