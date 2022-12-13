import React from 'react';
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { FaFacebook, FaTwitterSquare, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './HeaderVideo.css';
import video from '../../images/video-slider.mp4';

const HeaderVideo = () => {
    const menu = <>
        <li className="hover:text-primary"><Link to="/">HOME</Link></li>
        {/* <li><Link to="/about">ABOUT</Link></li> */}
        <li tabIndex={0}>
            <a className="hover:text-primary">
                ABOUT
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
                <li className="hover:text-primary"><Link to="/about">ABOUT US</Link></li>
                <li className="hover:text-primary"><Link to="/">ABOUT US</Link></li>
                <li className="hover:text-primary"><Link to="/">ABOUT US</Link></li>
                <li className="hover:text-primary"><Link to="/">ABOUT US</Link></li>
            </ul>
        </li >
        <li className="hover:text-primary"><Link to="/">PROPERTY</Link></li>

        {/* <li><Link to="/concern">CONCERN</Link></li> */}
        {/* <li><Link to="/services">SERVICES</Link></li> */}
        <li tabIndex={0}>
            <a className="hover:text-primary">
                SERVICES
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
                <li className="hover:text-primary"><Link to="/services">CONSTRUCTION</Link></li>

            </ul>
        </li>
        <li className="hover:text-primary"><Link to="/">CONTACT</Link></li>
        <li tabIndex={0}>
            <a className="hover:bg-primary hover:rounded-lg">
                <FaUserAlt />
            </a>
            <ul className="p-2 bg-base-100">
                <li className="hover:text-primary"><Link to="/signin">Sign in</Link></li>
                <li className="hover:text-primary"><Link to="/register">Register</Link></li>
            </ul>
        </li>

        {/* <li>{
        user
            ?
            <Link to="/login" onClick={logOut}>LOGOUT</Link>
            :
            <Link to='/login'>LOGIN</Link>
    }</li> */}

    </>
    return (
        <div>
            <div id='header' className='text-black'>
                <div className="navbar sticky top-0 z-50 px-16 ">
                    <div className="flex justify-between w-full">
                        <div className="w-1/3">
                            <div className="dropdown">
                                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                                    {menu}
                                </ul>
                            </div>
                            <a className="btn btn-ghost normal-case text-xl font-mono "><span className='text-primary '>LOGO</span></a>
                        </div>
                        <div className="w-2/3 flex justify-end">
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal p-0">
                                    {menu}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src={video} id='video-slider-1'>
                </video>
            </div>
        </div>
    );
};

export default HeaderVideo;