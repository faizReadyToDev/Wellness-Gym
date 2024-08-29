import React from "react";


export default function Timing() {
    function redirectToWhatsApp() {
        window.open("https://wa.me/916397848739?text=Hello%20from%20Wellness%20Gym!", "_blank");
    }
    return (
        <>
        <hr />
        <div className="flex flex-col w-[80vw] mx-auto justify-center items-center mt-20 mb-20">
            <h1 className="text-3xl font-extrabold mb-10 border-2 p-3 border-black bg-gray-900 text-white hover:bg-white hover:text-black cursor-pointer">Gym Timing!</h1>
            <h1 className="text-xl mb-4 font-semibold border-2 p-3 border-black">Boys Timing - Monday to Saturday: 6:00 AM – 10:00 AM</h1>
            <h1 className="text-xl mb-4 font-semibold border-2 p-3 border-black">Girls Timing - Monday to Saturday: 10:00 AM – 3:00 PM</h1>
            <h1 className="text-xl mb-4 font-semibold border-2 p-3 border-black">Boys Timing - Monday to Saturday: 3:00 PM – 10:00 PM</h1>
            <h1 className="text-xl mb-4 font-semibold border-2 p-3 border-black bg-red-700 text-white rounded-3xl cursor-pointer">Sunday OFF!</h1>
            <button onClick={redirectToWhatsApp} className="text-xl bg-blue-500 px-4 py-2 mt-5 text-white rounded border-0 shadow-xl ring-2 ring-slate-500 hover:bg-blue-800 hover:ring-slate-800 cursor-pointer">For More Details</button>

        </div>
        <hr />
        </>



    )};