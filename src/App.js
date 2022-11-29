import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import OurService from './Components/Pages/OurService/OurService';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurService />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
