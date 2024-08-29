import React from "react";

export default function ContactUs() {
    return (
        <>
           <div className="w-[65vw] mx-auto mt-20 mb-10">

                    <h1 className="text-3xl font-extrabold m1-20 mb-10 text-satrt ml-[6.5vw] underline">Contact Us:</h1>
                <div className="grid grid-cols-3">
                    <div className="flex  p-10 flex-col justify-center items-center">
                        <img src="src/assets/phone-call.png" alt="" />
                        <h1 className="font-bold mb-5">Call</h1>
                        <h1>+91 6397848739</h1>
                    </div>
                    <div className="flex p-10 flex-col justify-center items-center">
                        <img src="src/assets/whatsapplogo.png" alt="" />
                        <h1 className="font-bold mb-5">Whatsapp</h1>
                        <h1>+91 6397848739</h1>
                    </div>
                    <div className="flex  p-10 flex-col justify-center items-center">
                        <img src="src/assets/insta.png" alt="" />
                        <h1 className="font-bold" >Instragam</h1>
                        
                    </div>

                </div>
           </div>
           <hr />
        </>
    );
}