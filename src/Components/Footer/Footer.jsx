import React from "react"

export default function Footer() {

    function redirectToWhatsApp() {
        window.open("https://wa.me/916397848739?text=Hello%20from%20Wellness%20Gym!", "_blank");
    }
    function redirectToInstagram() {
        window.open("https://www.instagram.com/wellnessgym99/", "_blank");
    }
    function redirectToInstagram2() {
        window.open("https://www.instagram.com/faiz.codes/", "_blank");
    }
    function redirectToMap() {
        window.open("https://www.google.com/maps/dir//The+wellness+Gym,+Main+Market,+Jail+Rd,+Kuncha+Lala+Miyan,+Rampur,+Uttar+Pradesh+244901/@28.8189259,79.0309583,15.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390a8de7ee581563:0x97cb9d2b4b7942da!2m2!1d79.0285756!2d28.8182675?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D");
    }
    function redirectToCall() {
        window.location.href = "tel:+916397848739";
    }
    return (
            <footer className="mt-20">

                <div className="footer-first grid grid-cols-2 justify-between  lg:gap-x-64 md:gap-x-10 ml-10">
                    <div className="px-10 footer-logo">
                        <img className="footerlogo" src="assets/wellnesslogo.jpg" alt="" />
                        <p className="footer-p text-sm mt-5 mb-5">
                        "The wellness gym offers a healthy and energizing transformation."
                        </p>
                        <div className="flex footer-logos">
                            <img onClick={redirectToWhatsApp} className=" cursor-pointer" src="assets/whatsapplogo.png" alt="" />
                            <img onClick={redirectToInstagram} className=" cursor-pointer" src="assets/insta.png" alt="" />
                        </div>
                    </div>
                    <div className="mr-10 get-in">
                        <h1 className="text-2xl font-extrabold text-center mb-5">Get In Touch</h1>
                        <div>
                            <div className="flex mb-5 gap-5 map-location">
                                <img onClick={redirectToMap} className="footerlocation cursor-pointer" src="assets/locationicon.jpeg" alt="" />
                                <p onClick={redirectToMap} className="cursor-pointer">Main Market, Jail Rd, Kuncha Lala Miyan, Rampur, Uttar Pradesh - 244901</p>
                            </div >
                            <div className="flex mb-5 gap-5 phone-call">
                                <img onClick={redirectToCall} className="cursor-pointer" src="assets/callicon.png" alt="" />
                                <p onClick={redirectToCall} className="cursor-pointer">+91 6397848739</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex mb-5 items-center justify-center gap-5 design">
                    <img onClick={redirectToInstagram2} className="cursor-pointer" src="assets/insta.png" alt="" />
                    <p onClick={redirectToInstagram2} className="cursor-pointer font-bold">Designed and developed by Faiz Ur Rehman</p>
                </div>
                <div className="bg-black text-white p-5 w-full text-center text-sm mt-5">
                copyright &copy; 2024 Wellness | All Rights Reserved
                </div>

            </footer>

        )
}