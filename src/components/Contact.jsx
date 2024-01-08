import React from "react";
import './Contact.css';

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2 className="title">Contact</h2>
                <div className="contact-content">
                    <form action="#">
                        <label htmlFor="name">Full name :</label>
                        <input type="text" name="name" placeholder="Your full name" />
                        <label htmlFor="email">Email Address :</label>
                        <input type="text" name="name" placeholder="Your email address" />
                        <label htmlFor="message">Message :</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;