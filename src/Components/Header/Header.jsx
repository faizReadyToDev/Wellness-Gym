import React from "react";

export default function Header() {

    return (
        <>
         <header className='flex'>
                    <nav className='flex justify-between'>
                        <div className="logo items-center">
                            <img src="src/assets/wellnesslogo.jpg" alt="" />
                        </div>
                        <ul className='flex justify-center items-center'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                            <li>Location</li>
                            <li><button className="btn">Join Now</button></li>
                        </ul>
                    </nav>
                </header>
        
        </>

    )
}