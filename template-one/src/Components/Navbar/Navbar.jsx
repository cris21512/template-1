import React from "react";
import "./Navbar.css";

function Navbar() {
    return(
        <div className="nav">
            <section className="content-nav">
                <div className="space-nav">
                    <a href=""><p>Services</p></a>
                    <a href=""><p>Schedule a Consult</p></a>
                </div>
            </section>
        </div>
    )
}

export default Navbar;
