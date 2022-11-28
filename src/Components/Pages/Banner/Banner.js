import React from 'react';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-1/2">
                <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                    <div className="hero bg-base-200 overflow-hidden" style={{ "height": "500px" }}>
                        <div className="hero-content flex">

                            <div className='text-black'>
                                <h1 className="text-5xl font-bold" data-aos="fade-up">Find Your Dream <br /> Hourse By Us</h1>
                                <p className="py-6" data-aos="fade-up" data-aos-duration="2000">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro atque laudantium esse, dolorum reprehenderit </p>
                                <button className="btn btn-primary" data-aos="fade-up" data-aos-duration="3000">Get Started</button>
                            </div>
                            <img src={banner} className="max-w-md rounded" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full overflow-hidden" >
                    <div className="hero bg-base-200 overflow-hidden" style={{ "height": "500px" }}>
                        <div className="hero-content lg:flex">
                            <div data-aos="fade-up-left" data-aos-duration="2000">
                                <img src={banner} className="max-w-sm rounded" />
                            </div>
                            <div className='text-black'>
                                <h1 className="text-5xl font-bold" data-aos="fade-up">The Right Place of House Finding</h1>
                                <p className="py-6" data-aos="fade-up" data-aos-duration="2000">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary" data-aos="fade-up" data-aos-duration="3000">Get Started</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;