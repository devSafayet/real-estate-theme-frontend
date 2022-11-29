import React from 'react';
import About from '../About/About';
import AboutProperties from '../AboutProperties/AboutProperties';
import ApartmentsPlan from '../ApartmentsPlan/ApartmentsPlan';
import Banner from '../Banner/Banner';
import BuildingAminities from '../BuildingAminities/BuildingAminities';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import CountDown from '../CountDown/CountDown';
import NewsAndBlogs from '../NewsAndBlogs/NewsAndBlogs';
import OurService from '../OurService/OurService';
import Properties from '../Properties/Properties';
import WelcomeHeading from '../WelcomeHeading/WelcomeHeading';

const Home = () => {
    return (
        <div>
            <Banner />
            <WelcomeHeading />
            <About />
            <CountDown />
            <AboutProperties />
            <OurService />
            <Properties />
            <ApartmentsPlan />
            <BuildingAminities />
            <Contact />
            <ClientFeedback />
            <NewsAndBlogs />
        </div>
    );
};

export default Home;