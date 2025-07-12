import React from "react";
import './Services.css';

import Imagesect from './Imagesect';

import Copy from '../../Components/Copy/Copy';
import Squares from "../../Backgrounds/Squares/Squares";

import ButtonServices from '../../Components/Buttons/ButtonServices';

const Services = () => {
    return (
        <div>
            <Imagesect />
            <div className="Services-style">
                <div style={{ width: '100%', height: '180vh', overflow: 'hidden' }}>
                <Squares 
                    speed={0.5} 
                    squareSize={40}
                    direction="diagonal" // up, down, left, right, diagonal
                    borderColor="#D4AA7D"
                    hoverFillColor="#D4AA7D"
                />
                </div>
                <div className="column">
                    <h2 style={{ color: "var(--secondary-color)", fontSize: "3rem"}}>¿What We Offer?</h2>
                    <Copy><p>Business formation</p></Copy>
                    <Copy><p>Contract drafting</p></Copy>
                    <Copy><p>Mergers and Acquisitions</p></Copy>
                    <Copy><p>Property Protection</p></Copy>
                    <Copy><p>Employment Law</p></Copy>
                    <Copy><p>Corporate Governance</p></Copy>
                    <Copy><p>Shareholder Disputes</p></Copy>
                    <Copy><h2 style={{ fontSize: '4.5rem',  }}>More+</h2></Copy>
                    <ButtonServices/>
                </div>
            </div>
        </div>
    );
}

export default Services;
