import React from 'react';
import About from '../About/About';
import AboutProperties from '../AboutProperties/AboutProperties';
import ApartmentsPlan from '../ApartmentsPlan/ApartmentsPlan';
import Banner from '../Banner/Banner';
import BuildingAminities from '../BuildingAminities/BuildingAminities';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
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
            <ApartmentsPlan />
            <BuildingAminities />
            <ClientFeedback />
        </div>
    );
};

export default Home;