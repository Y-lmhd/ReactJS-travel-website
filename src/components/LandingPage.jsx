import React from "react";
import './LandingPage.css';
import backgroundImage from '../img/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg'

function LandingPage(){
    return(
        <section className="landing-page" style={{ backgroundImage:`url(.${backgroundImage})`}}>
            <div className="landing-page-content">
                <h1>Where Every Journey Begins with a Smile!</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor recusandae commodi consequuntur libero placeat aperiam tempore hic dolorum facilis quis. Quidem aut, eos ex dolorum ut sint nihil ad laboriosam!</p> */}
                <button>Discover our destinations</button>
            </div>
        </section>
    )
}
export default LandingPage;