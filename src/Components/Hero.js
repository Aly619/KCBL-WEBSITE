import React from "react";
import gl from '../Images/globe.png';
import gb from '../Images/gb.png';
import heroimg from '../Images/kcblpic.png';

const Hero=()=>{

    return(
           
    //<!-- ------------------Hero-Section------------------- -->

    <div>

    <div className="globe">

         <img id="gl" src={gl} alt=""/>
         <img id="gb" src={gb} alt=""/>

    </div>

    <section className="hero">

        <div className="hero-text">
            <h1>Your Vibrant <span className="primary-color">Financial</span> Institue</h1>
            <p>KCBL is one of the most vibrant financial institution, with a net work of 31 branches besides, 5 micro
                finance units across Gilgit-Baltistan.</p>
            <div className="btn">
                <a href="" className="hero-btn">Sign Up</a>
                <a href="" className="hero-btn exp">Explore Now</a>
            </div>
        </div>

        <div className="hero-img">

            <img id="heroimg"src={heroimg} alt=""/>

        </div>
    </section>

    </div>

    )
}

export default Hero