import React from "react";

export default function Machines(){

    return (
        <>
        <div className="flex flex-col w-[80vw] mx-auto justify-center items-center">
            <div className="border-2 p-3 border-black w-full bg-black  mb-5">
                <h1 className="text-3xl font-extrabold text-center text-white cursor-pointer">Available Machines</h1>
            </div>
            <div className="grid grid-cols-3 gap-10">
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-1.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Seated & Horizontal Shoulder Press</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-2.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Pec Fly Rear Delt</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-3.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Leg Extension & Leg Curl</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-4.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">High Pulley Row</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-5.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Commercial Treadmill</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-6.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Multi Bench</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-7.jpeg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Squat Rack</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-8.jpeg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Flat Bench</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-9.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Decline Bench(luxury)</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-10.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Adjustable Web Board</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-11.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Incline Bench (luxury)</h1>
                    </div>
                    <div>
                        <img class="w-72 h-82" src="src/assets/Machine-12.jpg" alt="" />
                        <h1 className=" font-extrabold text-center text-black">Smith Machine</h1>
                    </div>
            </div>
            <div className="border-2 p-3 border-black bg-blue-700 w-full mt-10 mb-20 rounded-full hover:bg-blue-950">
                <h1 className="text-2xl font-bold text-center text-white   cursor-pointer">Several more machines, visit & see them</h1>
            </div>
        </div>
        
        <hr />
        
        
        </>


    )
}