import React from "react";
import MapComponent from "../Contact Us/MapComponent";

export default function Location() {

    return (    
        <>  
        <div className=" w-[80vw] mx-auto justify-center items-center text-center text-3xl mt-20 "> <span className="cursor-pointer font-extrabold border-2 border-black p-5 hover:bg-black hover:text-white">Gym Location</span> </div>
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
