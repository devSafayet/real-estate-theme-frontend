import React from 'react';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                    <div className="hero min-h-screen bg-base-200 overflow-hidden" style={{ "height": "500px" }}>
                        <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                            <img src={banner} className="max-w-sm rounded" />
                            <div className='text-black'>
                                <h1 className="text-5xl font-bold">Find Your Dream Hourse By Us</h1>
                                <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro atque laudantium esse, dolorum reprehenderit natus beatae ea suscipit molestias perspiciatis quibusdam,</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" >
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={banner} className="max-w-sm rounded" />
                            <div className='text-black'>
                                <h1 className="text-5xl font-bold">The Right Place of House Finding</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
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