import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import './index.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import ContactUs from './Components/Contact Us/Contact-us'
import MapComponent from './Components/Contact Us/MapComponent'
import Location from './Components/Location/Location'
import Timing from './Components/Timing/Timing'
import Machines from './Components/Machines/Machines'
import Footer from './Components/Footer/Footer'
import Clients from './Components/Clients/Clients'
import Gallery from './Components/Gallery/Gallery'
import NewGallery from './Components/Gallery/New-Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
               
            </Routes>
            <Footer/>
        </Router>
    );
    </>
  )
}

export default App
