import React from "react";
import {NavLink} from "react-router-dom";

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
    return (
        
        <>
         <header className='flex'>
                    <nav className='flex justify-between'>
                        <div className="logo items-center">
                            <img src="src/assets/wellnesslogo.jpg" alt="" />
                        </div>
                        <ul className='flex justify-center items-center'>
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