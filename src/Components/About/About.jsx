import React from "react";
import ContactUs from '../Contact Us/Contact-us'
import MapComponent from '../Contact Us/MapComponent'
import Location from '../Location/Location'
import Timing from '../Timing/Timing'

export default function About() {
    
    return (
        <>
        
            <div className="logo-about w-[65vw] mx-auto justify-center items-center text-center mt-28 mb-20">
                <span className="h1-about text-center text-3xl font-extrabold relative z-2 bottom-14 bg-slate-100">ABOUT THE <span className="text-orange-500 font-extrabold">GYM</span></span>
           
                <div class="p-6 text-white bg-black p-about flex flex-col justify-center items-center">
                    <div className="w-70 items-center mx-auto justify-space-center text-center">
                        <div className="flex justify-center items-center mx-auto">
                            <p class="text-center text-lg font-bold"> "WELLNESS GYM" is founded with a deep understanding of the way the fitness industry behaves. Having a rich experience of 23 years into the gym and fitness arena. Gym has 2 A/c's & multiple types of machines to workout with. Owner of Gym Mr. Mukeem Miya also provide "Personal Training".</p>
                            <div className="bg-white p-10">
                            <img className="aboutlogo" src="src/assets/aboutlogo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Timing/> 
        <Location/>
       <ContactUs/> 
        </>

    )
}