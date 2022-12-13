import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Awards = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };
    return (
        <div className="px-16">
            <h1 className='mb-4 text-center'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Awards Thats We Achieve</span>
            </h1>
            <div>
                <div className="gap-4">

                    <Slider {...settings}>
                        <div>
                            <img src="https://epec.krtaker.com/uploads/award/logo-2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://epec.krtaker.com/uploads/award/logo-2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://epec.krtaker.com/uploads/award/logo-2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://epec.krtaker.com/uploads/award/logo-2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://epec.krtaker.com/uploads/award/logo-2.png" alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Awards;