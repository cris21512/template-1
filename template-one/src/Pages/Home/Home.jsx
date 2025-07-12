import React, { useEffect } from "react";
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    })

    return(
        <div className="Home-style">
            <Navbar />
            <div className="Blur-home">
            <div className="text-home">
                <h1 style={{ fontWeight: '300' }}>Jones & Brown Legal</h1>
            </div>
            <div className="info-home">
                <h2 data-aos="fade-zooom-in" 
                data-aos-easing="ease-in-back" 
                data-aos-offset="0">Deep expertise, decisive courtroom presence
                </h2>

                <p style={{ color: 'var(--text-color)', fontSize: '1.7rem' }}
                data-aos="fade-zooom-in" 
                data-aos-easing="ease-in-back" 
                data-aos-offset="0">
                    We've been serving the Los Angeles area with expert legal counsel since 1976.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Home;
