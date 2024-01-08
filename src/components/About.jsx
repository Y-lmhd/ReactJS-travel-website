import React from "react";
import './About.css';

function About() {
    return (
        <section className="about">
            <div className="container"
            ><h2 className="title">About Us</h2>
            <div className="about-content">                
                    <div className="about-text">
                        <p>
                            Welcome to [Travel Agency Name], where the journey begins and unforgettable memories are made. At 
                            [Travel Agency Name], we understand that travel is not just about reaching a destination; it's about 
                            experiencing the world in all its richness and diversity. Our passion for exploration and commitment 
                            to exceptional service drive us to curate unique and personalized travel experiences for our clients.
                        </p>
                        <p>
                            With a team of dedicated travel experts, [Travel Agency Name] is your trusted partner in crafting 
                            seamless and immersive journeys. Whether you seek the thrill of adventure, the tranquility of a 
                            beach retreat, or the cultural enrichment of exploring historical landmarks, we are here to turn 
                            your travel dreams into reality. From meticulously planned itineraries to exclusive accommodations 
                            and insider access to local treasures, we go the extra mile to ensure that each trip with us is a 
                            journey of a lifetime. Join us as we embark on a world of discovery, where every destination becomes 
                            a story waiting to be told.
                        </p>
                        <button className="about-btn">Learn more</button>
                    </div>
                    <div className="about-image">
                        <img alt="about-travel" src="img/pexels-nubia-navarro-(nubikini)-386009.jpg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;