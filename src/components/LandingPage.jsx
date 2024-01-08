import React from "react";
import './LandingPage.css';
import backgroundImage from '../img/beautiful-day-at-the-beach.jpg'

function LandingPage(){
    return(
        <section className="landing-page" style={{ backgroundImage:`url(${backgroundImage})`}}>
            <div className="landing-page-content">
                <h1>TRAVEL SLOGAN</h1>
                <h2>Travel speach</h2>
                <button>Discover our destinations</button>
            </div>
        </section>
    )
}
export default LandingPage;