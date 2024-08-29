import React from "react";
import MapComponent from "../Contact Us/MapComponent";

export default function Location() {
    function redirectToMap() {
        window.open("https://www.google.com/maps/dir//The+wellness+Gym,+Main+Market,+Jail+Rd,+Kuncha+Lala+Miyan,+Rampur,+Uttar+Pradesh+244901/@28.8189259,79.0309583,15.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390a8de7ee581563:0x97cb9d2b4b7942da!2m2!1d79.0285756!2d28.8182675?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D");
    }
    return (    
        <>  
        <div className=" w-[80vw] mx-auto justify-center items-center text-center text-3xl mt-20 "> <span onClick={redirectToMap} className="cursor-pointer font-extrabold border-2 border-black p-5 hover:bg-black hover:text-white">Gym Location</span> </div>
        <div className="flex w-[80vw]  bg-black text-white mx-auto justify-between mt-20 gap-5 mb-20">
            <div className="border-2 p-10 border-black w-1/2">
            <h1 className="text-xl font-bold mb-10 text-start underline"> Address:  </h1>
            <h2 className="text-lg ">Main Market, Jail Rd, Kuncha Lala Miyan,</h2>
            <h2 className="text-lg mb-10"> Rampur, Uttar Pradesh - 244901</h2>
            <h2 className="text-lg  ">Mobile No - +91 6397848739</h2>
            </div>
            <div className="border-2  border-black">
            <MapComponent/>
            </div>
        </div>
        

        <hr />
        </>
)}
