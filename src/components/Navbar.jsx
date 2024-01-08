import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <header>
            <div className="header-content">
                <div className="logo">
                    <a href="/">LOGO</a>
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