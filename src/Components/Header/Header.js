import React from 'react';
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { FaFacebook, FaTwitterSquare, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Header = () => {
    /* const { pathname } = useLocation();

    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    }; */
    const menu = <>
        <li className="hover:text-primary"><Link to="/">HOME</Link></li>
        {/* <li><Link to="/about">ABOUT</Link></li> */}
        <li tabIndex={0}>
            <a className="hover:text-primary">
                ABOUT
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
                <li className="hover:text-primary"><Link to="/">ABOUT US</Link></li>
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
                <li className="hover:text-primary"><Link to="/">CONSTRUCTION</Link></li>

            </ul>
        </li>
        <li className="hover:text-primary"><Link to="/">CONTACT</Link></li>
        <li tabIndex={0}>
            <a className="hover:bg-primary hover:rounded-lg">
                <FaUserAlt />
            </a>
            <ul className="p-2 bg-base-100">
                <li className="hover:text-primary"><Link to="/">Sign in</Link></li>
                <li className="hover:text-primary"><Link to="/">Register</Link></li>
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
        <div className='mx-auto text-black'>
            {/* TOPBAR  */}
            <div className='bg-secondary text-white lg:flex justify-between pt-2 pb-2 px-16 cursor-pointer md:mb-2 sm:mb-2'>
                {/* left-side icons and text  */}
                <div className='lg:flex gap-3 ps-3 pl-2'>
                    <div className='flex gap-1 items-center hover:text-primary'>
                        <IoLocationOutline />
                        <h3>H-33, R-15, Sector-11, Uttara, Dhaka-1230 </h3>
                    </div>
                    <div className='flex gap-1 items-center hover:text-primary'>
                        <IoCallOutline />
                        <h3>  +880963-8557887</h3>
                    </div>
                    <div className='flex gap-1 items-center hover:text-primary'>
                        <CgMail />
                        <h3> info@gmail.com</h3>
                    </div>
                </div>
                {/* Right Side Social Icons  */}

                <div className=' justify-around lg:gap-4 flex text-white'>
                    <div>
                        <a target="_blank" href="https://facebook.com/" aria-hidden="true"><span>
                            <FaFacebook />
                        </span></a>
                    </div>
                    <div>
                        <a target="_blank" href="https://twitter.com/" aria-hidden="true"><span>
                            <FaTwitterSquare />
                        </span></a>
                    </div>
                    <div>
                        <a target="_blank" href="https://web.whatsapp.com/" aria-hidden="true"><span>
                            <FaWhatsapp />
                        </span></a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.instagram.com/" aria-hidden="true"><span>
                            <FaInstagram />
                        </span></a>
                    </div>

                </div>
            </div>

            {/* --------------------Navbar--------------- */}
            <div className="navbar bg-white sticky top-0 z-50 px-16">
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
                {/*  {pathname.includes("dashbord") && <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashbord-slider" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>} */}

            </div>
        </div >
    );
};

export default Header;