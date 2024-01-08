import React from "react";
import './Destinations.css';
import { Destination } from "../Data";
function Destinations() {
    return (
        <section className="destinations">
            <div className="destinations-content container">
                <h2 className="title"> Our destinations :</h2>
                <div className="destinations-wrapper">
                    {
                        Destination.map((Destination) => {
                            return (
                                <div key={Destination.id} className="destination-card"> 
                                    <div className="destnation-image">
                                        <img src={Destination.image} alt="santorin greece" />
                                    </div>
                                    <div className="destination-text">
                                        <h3 className="destination-title">{Destination.title}</h3>
                                        <p className="destination-description">
                                            {Destination.description}
                                        </p>
                                        <p>{Destination.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }                   
                </div>
            </div>
        </section>
    )
}
export default Destinations;