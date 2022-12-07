import React from 'react';
import './Header2.css';
import video from '../../../src/images/video-slider.mp4';

const Header2 = () => {
    return (
        <div className='ml-0 mr-0'>
            <div id="header" class="w-100">
                <div class="">
                    <div class="row mt-3">
                        {/*  <nav class="navbar navbar-expand-lg navbar-dark w-100">
                            <a class="navbar-brand" href="#"><img id="mainLogo" src="LOGO" alt="HerediaEstudio" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Process</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" target="_BLANK" href="">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link MyButton buttonYellow" href="#">Let's Talk!</a>
                                    </li>
                                </ul>
                            </div>
                        </nav> */}
                    </div>
                </div>

            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                {/* <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" class="active"></li>
                </ol> */}
                <div id="carrousel" class="carousel-inner">
                    {/* <!-- Carousel item  1 --> */}
                    <div data-pause="true" data-interval="10000" class="carousel-item active">
                        <div class="videoSlider">

                            <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src="https://video.wixstatic.com/video/2b2e29_67857aa3bb16417ea7909ddc8d01b6e0/720p/mp4/file.mp4" id='video-slider-1'>
                            </video>
                        </div>
                    </div>
                    {/* <!-- end of carousel item 1--> */}
                    {/* <!-- Carousel item  2 --> */}
                    {/*  <div data-pause="true" data-interval="10000" class="carousel-item">
                        <div class="videoSlider">
                            <h1 class="d-block sliderTitle">Slider Tittle 2</h1>

                            <h2 class="d-block sliderSubtitle">Slider Subtittle 2</h2>

                            <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src="https://ak.picdn.net/shutterstock/videos/1025732684/preview/stock-footage-two-male-colleagues-employees-cooperating-in-office-talking-working-together-at-workplace-smiling.webm" id='video-slider-2'>
                            </video>
                        </div>
                    </div> */}
                    {/* <!-- end of carousel item 2--> */}
                    {/* <!-- Carousel item  3 --> */}
                    {/*  <div data-pause="true" data-interval="10000" class="carousel-item">
                        <div class="videoSlider">
                            <h1 class="d-block sliderTitle">Slider Tittle 3</h1>

                            <h2 class="d-block sliderSubtitle">Slider Subtittle 3</h2>

                            <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src="https://ak.picdn.net/shutterstock/videos/1033204736/preview/stock-footage-closeup-coding-on-screen-man-hands-coding-html-and-programming-on-screen-laptop-development-web.webm" id='video-slider-3'>
                            </video>
                        </div>
                    </div> */}
                    {/* <!-- end of carousel item 3--> */}

                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                <div class="container-fluid containerVideobg">
                    <video width="100%" class="videoSliderBackground" loop="loop" autoPlay playsInline muted src="https://ak.picdn.net/shutterstock/videos/1022398360/preview/stock-footage-night-starry-skies-with-twinkling-or-blinking-stars-motion-background-looping-seamless-space.webm" id="video-slider-background" ></video>
                </div>
            </div>
        </div>
    );
};

export default Header2;