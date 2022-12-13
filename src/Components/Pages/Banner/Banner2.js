import React, { useState } from 'react';
import banner from '../../../images/banner-images.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner2 = () => {
    // slider 
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // state change 
    const [miniCount, setMiniCount] = useState(1);
    const [maxCount, setMaxCount] = useState(1);

    return (
        <div className='relative'>
            {/* slider section  */}
            <div>
                <Slider {...settings}>
                    <div>
                        <img className='w-full' src={banner} alt="" />
                    </div>
                    <div>
                        <img className='w-full' src={banner} alt="" />
                    </div>
                    <div>
                        <img className='w-full' src={banner} alt="" />
                    </div>

                </Slider>
            </div>
            {/* card section  */}
            <div className='w-auto bg-primary absolute top-4 left-16'>
                <div className='p-2 rounded'>
                    <label htmlFor="" className='text-xl text-white'>Property Status</label> <br />

                    <select id="cars" name="cars" className='w-full bg-white text-black rounded mt-2 p-1'>
                        <option value="Any Status">Any Status</option>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                        <option value="Sold">Sold</option>
                    </select>
                </div>
                <div className='p-2 rounded'>
                    <label htmlFor="" className='text-xl text-white'>Property Type</label> <br />

                    <select id="cars" name="cars" className='w-full bg-white text-black rounded mt-2 p-1'>
                        <option value="Any Status">Any Type</option>
                        <option value="For Sale">Family House</option>
                        <option value="For Rent">Apartment</option>
                        <option value="Sold">Condo</option>
                    </select>
                </div>
                <div className='p-2 rounded'>
                    <label htmlFor="" className='text-xl text-white'>Location</label> <br />

                    <select id="cars" name="cars" className='w-full bg-white text-black rounded mt-2 p-1'>
                        <option value="Any Status">Any Location</option>
                        <option value="For Sale">Uttara</option>
                        <option value="For Rent">Bosundara</option>
                        <option value="Sold">Khilkhet</option>
                    </select>
                </div>

                <div className=' flex'>
                    <div className='p-2 rounded w-32'>
                        <label htmlFor="" className='text-xl text-white'>Beds</label> <br />

                        <select id="cars" name="cars" className=' bg-white text-black rounded mt-2 p-1 px-4'>
                            <option value="">Any</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </div>
                    <div className='p-2 rounded w-32'>
                        <label htmlFor="" className='text-xl text-white'>Baths</label> <br />

                        <select id="cars" name="cars" className=' bg-white text-black rounded mt-2 p-1 px-2'>
                            <option value="">Any</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-4 p-2'>
                    <div>
                        <h1 className='text-white text-xl mb-2'>Area (Min)</h1>
                        <div className='flex gap-1 items-center '>

                            <button className='btn btn-white text-black' onClick={() => setMiniCount(miniCount - 1)} disabled={miniCount === 0}>-</button>

                            <input type="text" name="" id="" className='  rounded text-black bg-white w-24 py-3 text-center' value={miniCount} onChange={(e) => setMiniCount(e.target.value)} />

                            <button className='btn btn-white text-black' onClick={() => setMiniCount(miniCount + 1)} >+</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white text-xl mb-2'>Area (Max)</h1>
                        <div className='flex gap-1 items-center'>

                            <button className='btn btn-white text-black' onClick={() => setMaxCount(maxCount - 1)} disabled={maxCount === 0}>-</button>


                            <input type="text" name="" id="" className='  rounded text-black bg-white w-24 py-3 text-center' value={maxCount} onChange={(e) => setMaxCount(e.target.value)} />

                            <button className='btn btn-white text-black' onClick={() => setMaxCount(parseInt(maxCount) + 1)} >+</button>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-white text-black my-4'>SEARCH PROPERTY</button>
                </div>
            </div>
        </div >
    );
};

export default Banner2;