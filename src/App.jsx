import { useState } from 'react'
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
      <Header/>
      {/* <Gallery/> */}
      <Home />
      
       {/* <About/> */}

      <Footer/>
    </>
  )
}

export default App
