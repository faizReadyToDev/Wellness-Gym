import React from "react"

export default function Footer() {

    return (
            <footer className="mt-20">

                <div className="grid grid-cols-2 justify-between  gap-x-64 ml-10">
                    <div className="">
                        <img className="footerlogo" src="src/assets/wellnesslogo.jpg" alt="" />
                        <p className="text-sm mt-5 mb-5">
                        "WELLNESS GYM is founded with a deep understanding of the way the fitness industry behaves."
                        </p>
                        <div className="flex ml-10">
                            <img src="src/assets/whatsapplogo.png" alt="" />
                            <img src="src/assets/insta.png" alt="" />
                        </div>
                    </div>
                    <div className="mr-10">
                        <h1 className="text-2xl font-extrabold text-center mb-5">Get In Touch</h1>
                        <div>
                            <div className="flex mb-5">
                                <img className="footerlocation" src="src/assets/locationicon.jpeg" alt="" />
                                <p>Main Market, Jail Rd, Kuncha Lala Miyan, Rampur, Uttar Pradesh - 244901</p>
                            </div >
                            <div className="flex mb-5">
                                <img src="src/assets/callicon.png" alt="" />
                                <p>+91 6397848739</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-black text-white p-5 w-full text-center text-sm mt-5">
                copyright &copy; 2024 Wellness | All Rights Reserved
                </div>

            </footer>

        )
}