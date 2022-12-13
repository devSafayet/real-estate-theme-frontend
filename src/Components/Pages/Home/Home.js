import React from 'react';
import About from '../About/About';
import AboutProperties from '../AboutProperties/AboutProperties';
import ApartmentsPlan from '../ApartmentsPlan/ApartmentsPlan';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import VideoBanner from '../Banner/VideoBanner';
import BuildingAminities from '../BuildingAminities/BuildingAminities';
import ChooseAplan from '../ChooseAplan/ChooseAplan';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import CountDown from '../CountDown/CountDown';
import Faq from '../Faq/Faq';
import GoogleMap from '../GoogleMap/GoogleMap';
import HotLine from '../HotLine/HotLine';
import MessageFromMD from '../MessageFromMD/MessageFromMD';
import NewsAndBlogs from '../NewsAndBlogs/NewsAndBlogs';
import OurService from '../OurService/OurService';
import OurTeam from '../OurTeam/OurTeam';
import Properties from '../Properties/Properties';
import WelcomeHeading from '../WelcomeHeading/WelcomeHeading';

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <Banner2 />
            {/* <VideoBanner /> */}
            <WelcomeHeading />
            <About />
            <CountDown />
            <AboutProperties />
            <OurService />
            <Properties />
            <ApartmentsPlan />
            <ChooseAplan />
            <BuildingAminities />
            <MessageFromMD />
            {/* <OurTeam /> */}
            <Awards />
            <Faq />

            <HotLine />
            <Contact />
            <ClientFeedback />
            <NewsAndBlogs />
            <GoogleMap />
        </div>
    );
};

export default Home;