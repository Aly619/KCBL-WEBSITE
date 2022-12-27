import React from "react";
import logo from '../Images/kcbl.png'

const Navbar=()=>{
    
    return(
       
    // <!-- ------------------Header-------------------- -->

    <section className="header">
        <div className="logo">
            <img src={logo}alt=""/>
            <a href="index.html"><span class="primary-color">Karakuram Cooperative</span> <br/>Bank Limited</a>
        </div>

        <div className="links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Corporate Profile</a></li>
                <li><a href="">Branch Locator</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">News</a></li>
            </ul>

        </div>

        <div class="btn">

            <a href="" class="hero-btn">Sign Up</a>

        </div>
    </section>


    )
}

export default Navbar