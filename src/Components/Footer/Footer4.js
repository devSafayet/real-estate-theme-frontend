import React from 'react';
import { CgMail } from 'react-icons/cg';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
import { IoCallOutline, IoLocation } from 'react-icons/io5';

const Footer4 = () => {
    return (
        <div className=''>
            <footer className="footer px-16 py-10 text-white bg-accent">
                <div className=''>
                    <span className="text-2xl font-bold text-white">Marbelus</span>
                    <a className="link link-hover">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.<br /> Architecto repellat voluptas <br /> aperiam veniam corporis saepe<br /> numquam  quo cumque ipsa modi <br />cum  eos exercitationem</a>
                    <a className="link link-hover">
                        <div className='flex gap-1 items-center hover:text-primary'>
                            <IoLocation />
                            <h3> Brooklyn, New York, United States</h3>
                        </div>



                    </a>
                    <a className="link link-hover">
                        <div className='flex gap-1 items-center hover:text-primary'>
                            <IoCallOutline />
                            <h3>  +880963-8557887</h3>
                        </div>
                    </a>
                    <a className="link link-hover">
                        <div className='flex gap-1 items-center hover:text-primary'>
                            <CgMail />
                            <h3> info@gmail.com</h3>
                        </div>
                    </a>
                </div>
                <div>
                    <span className="text-2xl font-bold text-white">Navigation</span>
                    <a className='border-b border-dashed '>About</a>
                    <a className="border-b border-dashed">Blogs</a>
                    <a className="border-b border-dashed">All Products</a>
                    <a className="border-b border-dashed">Contact</a>
                    <a className="border-b border-dashed">FAQ</a>
                </div>
                <div>
                    <span className="text-2xl font-bold text-white">Services</span>
                    <a className="border-b border-dashed">Cart</a>
                    <a className="border-b border-dashed">Wish List</a>
                    <a className="border-b border-dashed">Login</a>
                    <a className="border-b border-dashed">Checkout</a>
                    <a className="border-b border-dashed">Team & Conditions</a>
                </div>
                <div>
                    <span className="text-2xl font-bold text-white">Twitter Feeds </span>
                    <div className='flex gap-4 '>
                        <div className='font-bold text-xl'>
                            <BsTwitter />
                        </div>
                        <div>
                            <h3 className='text-font'>@Marbelus <span className='text-slate-400'>All Share <br /> Them With Me Baby Said <br /> Inspet.</span></h3>
                            <span className='text-slate-400'>about 7 days ago</span>
                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='font-bold text-xl'>
                            <BsTwitter />
                        </div>
                        <div>
                            <h3 className='text-font'>@Marbelus <span className='text-slate-400'>All Share <br /> Them With Me Baby Said<br /> Inspet.</span></h3>
                            <span className='text-slate-400'>about 7 days ago</span>
                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='font-bold text-xl'>
                            <BsTwitter />
                        </div>
                        <div>
                            <h3 className='text-font'>@Marbelus <span className='text-slate-400'>All Share <br /> Them With Me Baby Said<br /> Inspet.</span></h3>
                            <span className='text-slate-400'>about 7 days ago</span>
                        </div>
                    </div>
                </div>


                <div>
                    <span className="text-2xl font-bold text-white">Newsletters</span>
                    <a className="link link-hover text-slate-400">Sign Up for Our Newsletter to get <br /> Latest Updates and Offers. <br /> Subscribe to receive news in your <br /> inbox.</a>


                    <input className='text-black p-4 px-8 rounded' type="text" placeholder='Enter Your E-mail' />

                    <button className='py-4 px-20 bg-primary rounded'>SUBSCRIBE</button>


                </div>
            </footer>
            <footer className="footer px-16 py-4 border-t bg-secondary text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <p className="text-black">© All Rights Reserved | Developed by <a className='font-bold text-primary' target='_blank' href="https://www.bitscol.com/">bitscol</a></p>
                </div>
                <div className="md:place-self-center md:justify-self-end text-black">
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' href="">
                            <div className='text-xl text-primary bg-neutral rounded-full m-auto p-1'>
                                <FaFacebook />
                            </div>
                        </a>

                        <a target='_blank' href="">
                            <div className='text-xl text-primary bg-neutral rounded-full m-auto p-1'>
                                <FaTwitterSquare />
                            </div>

                        </a>
                        <a target='_blank' href="">
                            <div className='text-xl text-primary bg-neutral rounded-full m-auto p-1'>
                                <FaGoogle />
                            </div>

                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer4;