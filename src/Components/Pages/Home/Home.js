import React from 'react';
import About from '../About/About';
import AboutProperties from '../AboutProperties/AboutProperties';
import Banner from '../Banner/Banner';
import CountDown from '../CountDown/CountDown';
import OurService from '../OurService/OurService';
import Properties from '../Properties/Properties';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <CountDown />
            <AboutProperties />
            <OurService />
            <Properties />
        </div>
    );
};

export default Home;