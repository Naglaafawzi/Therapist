import React from 'react';
import '../css/HeroSection.css';
import heroImage from '../images/Heroimg.png'; // Update the path to your image

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="text-container">
                <h5>1LifeLine.</h5>
                <h1>Accessible Therapy For Everyone.</h1>
                <button className="contact-button">Contact Us</button>
            </div>
            <div className="image-container">
                <img src={heroImage} alt="Therapy session" />
            </div>
        </section>
    );
};

export default HeroSection;
