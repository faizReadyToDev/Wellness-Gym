import React from "react";
import {NavLink} from "react-router-dom";
import { useState } from "react";

export default function Header() {

    function redirectToMap() {
        window.open("https://www.google.com/maps/dir//The+wellness+Gym,+Main+Market,+Jail+Rd,+Kuncha+Lala+Miyan,+Rampur,+Uttar+Pradesh+244901/@28.8189259,79.0309583,15.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390a8de7ee581563:0x97cb9d2b4b7942da!2m2!1d79.0285756!2d28.8182675?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D");
    }
    function redirectToWhatsApp() {
        window.open("https://wa.me/916397848739?text=Hello%20from%20Wellness%20Gym!", "_blank");
    }
    function redirectToCall() {
        window.location.href = "tel:+916397848739";
    }

    const [menuPosition, setMenuPosition] = useState('-300px');

    const toggleMenuPosition = () => {
      setMenuPosition(menuPosition === '0px' ? '-300px' : '0px');
    };
    return (
        <>
         <header className='flex'>
                    <nav className='flex justify-between'>
                        <div className="logo items-center">
                            <img src="assets/wellnesslogo.jpg" alt="" />
                        </div>
                        <div id="close" onClick={toggleMenuPosition} className="w-[300px] p-5 absolute right-[0px] z-20 hidden close">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </div>
                        <div id="menu" onClick={toggleMenuPosition} className="items-center hidden menu">
                            <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </div>
                        <ul style={{ right: menuPosition }} className='flex justify-center items-center'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "font-bold active p-x-2 underline decoration-dotted underline-offset-2" : "p-x-2"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? "font-bold active p-x-2 underline decoration-dotted underline-offset-2" : "p-x-2"}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                    to="/gallery"
                                    className={({ isActive }) => isActive ? "font-bold active p-x-2 underline decoration-dotted underline-offset-2" : "p-x-2"}>
                                    Gallery
                                </NavLink>

                            </li>
                            <li onClick={redirectToCall}>Contact Us</li>
                            <li onClick={redirectToMap}>Location</li>
                            <li onClick={redirectToWhatsApp} className="bg-black text-white rounded-lg px-4 py-1 hover:bg-red-600 hover:text-white">Join Now</li>
                        </ul>
                    </nav>
                </header>
        
        </>

    )
}