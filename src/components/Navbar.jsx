import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <header>
            <div className="header-content">
                <div className="logo">
                    <a href="/">
                        <img alt="about-travel" src="img/20240110_153416_0000.png"/>
                    </a>
                </div>
                <nav>
                    <ul className="navigation-menu">
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul> 
                </nav>
            </div>
        </header>
    )
}
export default Navbar;