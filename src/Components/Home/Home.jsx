import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Machines from '../Machines/Machines';
import Clients from '../Clients/Clients';



export default function Home() {

    const [today, setToday] = useState('');

    useEffect(() => {
        timeNow();
        setInterval(timeNow, 500); 
    }, []);

    function timeNow() {
        const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let currDay = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            currDay = "EXPIRED";
        }

        setToday(currDay); 
    }

    function redirectToWhatsApp() {
        window.open("https://wa.me/916397848739?text=Hello%20from%20Wellness%20Gym!", "_blank");
    }
    function redirectToCall() {
        window.location.href = "tel:+916397848739";
    }
    return (
        <>
            <div className="container">

                <main>
                    <section className="sec1 flex">
                        <div className="topleft flex flex-col items-center justify-center">
                            <div className="dumbbell">
                                <img src="src/assets/dumbell.png" alt="" />
                            </div>
                            <h1>
                                Where Strength Meets Community
                            </h1>
                            <p>
                                "Get fit at the best gym in town! Join now for state-of-the-art equipment, expert trainers, and a motivating environment. Your fitness journey starts here. Sign up today!"
                            </p>
                            <div className="offer font-extrabold text-xl mt-5 mb-5 text-white"><span className='bg-black p-3 rounded'>Special Offer: ₹3000 for 6 Months</span></div>
                            <div className="deal text-center">The deal ends in <span id="demo">{today}</span></div>
                            <div className="buttons">
                                <button onClick={redirectToWhatsApp} className="btn btn1 border-2 ring-2 ring-slate-300 hover:ring-slate-800 hover:bg-slate-200">Join now</button>
                                <button onClick={redirectToCall} className="btn2 hover:bg-red-600">Contact Us</button>
                            </div>
                        </div>
                        <div className="topright flex items-center justify-center">
                            <div className="body-1 flex items-center justify-center absolute">
                                <img className='ustaad-1 relative bottom-5 cursor-pointer z-1 hover:opacity-0 hover:transition-opacity duration-300' src="src/assets/Ustaad-1.jpg" alt="" />
                                <img className="ustaad-2 absolute opacity-0 hover:opacity-100 hover:transition-opacity duration-300 " src="src/assets/Ustaad-2.jpg" alt="Gym Owner Hover" />
                                <span className="tagline absolute">"Gym Owner"</span>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="sec2 flex flex-col items-center">
                        <h2 className="text-3xl font-extrabold">Pricing</h2>
                        <p>"Join us for a premium gym experience with top-notch equipment, diverse group classes, and personalized training programs. Unlock your potential and achieve your fitness goals in a motivating and supportive environment."</p>
                        <div className="cardContainer flex">
                          
                            <div className="card">
                                <ul className="flex flex-col justify-center items-center">
                                    <h3>Monthly</h3>
                                    <li>₹700</li>
                                    <li>Monthly Subscription</li>
                                    <li>No Personal Training</li>
                                    <li>Full Beginner Guidance</li>
                                    <li><button onClick={redirectToWhatsApp} className="btn hover:bg-red-600">Get your slot Now!</button></li>
                                </ul>
                            </div>
                            <div className="card">
                                <ul className="flex flex-col justify-center items-center">
                                    <h3>Advance</h3>
                                    <li>₹3000</li>
                                    <li>6 month Subscription</li>
                                    <li>Personal Training Demo</li>
                                    <li>Diet Chart & Advance Guidance</li>
                                    <li><button onClick={redirectToWhatsApp} className="btn hover:bg-red-600">Get your slot Now!</button></li>
                                </ul>
                            </div>
                            <div className="card">
                                <ul className="flex flex-col justify-center items-center">
                                    <h3>Pro</h3>
                                    <li>₹3000</li>
                                    <li>Monthly Subscription</li>
                                    <li>Personal Training</li>
                                    <li>Diet Chart & Advance Guidance</li>
                                    <li><button onClick={redirectToWhatsApp} className="btn hover:bg-red-600">Get your slot Now!</button></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="section3">
                        <h1 className="">Compare Plans</h1>
                        <div className="plantable">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Montly</th>
                                        <th>Advance</th>
                                        <th>Pro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Cardio</th>
                                        <td>-</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">Weight Lifting</th>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                        <td>Yes</td>
                                        
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th scope="row">Personal Training</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Yes</td>
                                
                                    </tr>
                                    <tr>
                                        <th scope="row">Diet Chart</th>
                                        <td>-</td>
                                        <td>-</td>
                                       
                                        <td>Yes</td>
                                    </tr>
                                   
                                    <tr>
                                        <th scope="row">Supplement Guidance</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Yes</td>
                                     
                                    </tr>
                                    <tr>
                                        <th scope="row">6 month Subscription</th>
                                        <td>-</td>
                                        <td>Yes</td>
                                        <td>-</td>
                                     
                                    </tr>
    
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
             <Machines/> 
             <Clients/>
        </>
    );
}
