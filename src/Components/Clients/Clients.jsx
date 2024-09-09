import React from "react";

export default function Clients(){
    return(
        <>
        <div className="clientsDiv mt-20" >

        <div className="text-center text-3xl font-extrabold mb-20 border-2 bg-black text-white border-black overflow-hidden">Clients</div>
        <div className="banner">
            <div className="slider" style={{'--quantity': 12}}>
                <div className="item" style={{'--position': 1}}><img src="assets/client1.jpg" alt="" /></div>
                <div className="item" style={{'--position': 2}}><img src="assets/client2.jpg" alt="" /></div>
                <div className="item" style={{'--position': 3}}><img src="assets/client3.jpg" alt="" /></div>
                <div className="item" style={{'--position': 4}}><img src="assets/client4.jpg" alt="" /></div>
                <div className="item" style={{'--position': 5}}><img src="assets/client5.jpg" alt="" /></div>
                <div className="item" style={{'--position': 6}}><img src="assets/client6.jpg" alt="" /></div>
                <div className="item" style={{'--position': 7}}><img src="assets/client1.jpg" alt="" /></div>
                <div className="item" style={{'--position': 8}}><img src="assets/client2.jpg" alt="" /></div>
                <div className="item" style={{'--position': 9}}><img src="assets/client4.jpg" alt="" /></div>
                <div className="item" style={{'--position': 10}}><img src="assets/client5.jpg" alt="" /></div>
                <div className="item" style={{'--position': 11}}><img src="assets/client6.jpg" alt="" /></div>
                <div className="item" style={{'--position': 12}}><img src="assets/client3.jpg" alt="" /></div>
            </div>
            <span className="before-after relative text-3xl font-extrabold bg-slate-100 text-black">Before & After</span>

        </div>
        </div>



        </>
        
    
    
    
    
    )
}