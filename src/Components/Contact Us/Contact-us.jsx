import React from "react";

export default function ContactUs() {
    function redirectToWhatsApp() {
        window.open("https://wa.me/916397848739?text=Hello%20from%20Wellness%20Gym!", "_blank");
    }
    function redirectToInstagram() {
        window.open("https://www.instagram.com/wellnessgym99/", "_blank");
    }
    function redirectToCall() {
        window.location.href = "tel:+916397848739";
    }
    return (
        <>
           <div className="w-[65vw] mx-auto mt-20 mb-10">

                    <h1 className="text-3xl font-extrabold m1-20 mb-10 text-satrt ml-[6.5vw] underline">Contact Us:</h1>
                <div className="about-contact grid grid-cols-3">
                    <div className="flex  p-10 flex-col justify-center items-center">
                        <img onClick={redirectToCall} className="cursor-pointer" src="assets/phone-call.png" alt="" />
                        <h1 onClick={redirectToCall} className="font-bold mb-5 cursor-pointer">Call</h1>
                        <h1 onClick={redirectToCall} className="cursor-pointer">+91 6397848739</h1>
                    </div>
                    <div className="flex p-10 flex-col justify-center items-center">
                        <img onClick={redirectToWhatsApp} className="cursor-pointer" src="assets/whatsapplogo.png" alt="" />
                        <h1 onClick={redirectToWhatsApp} className="font-bold mb-5 cursor-pointer">Whatsapp</h1>
                        <h1 onClick={redirectToWhatsApp} className="cursor-pointer">+91 6397848739</h1>
                    </div>
                    <div className="flex  p-10 flex-col justify-center items-center">
                        <img onClick={redirectToInstagram} className="cursor-pointer" src="assets/insta.png" alt="" />
                        <h1 onClick={redirectToInstagram} className="font-bold cursor-pointer" >Instagram</h1>
                        
                    </div>

                </div>
           </div>
           <hr />
        </>
    );
}