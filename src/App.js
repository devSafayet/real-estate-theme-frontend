import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer/Footer2';
import Footer3 from './Components/Footer/Footer3';
import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import HeaderVideo from './Components/Header/HeaderVideo';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import OurService from './Components/Pages/OurService/OurService';

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Header2 /> */}
      <HeaderVideo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurService />} />



      </Routes>
      {/* <Footer /> */}
      <Footer2 />
      {/* <Footer3 /> */}
    </div>
  );
}

export default App;
