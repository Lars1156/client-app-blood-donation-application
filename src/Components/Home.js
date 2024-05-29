import React from 'react';
import './css.files/home.css';


const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">Donate Blood, Save Lives</h1>
                <p className="hero-description">
                    Your blood donation can give a precious gift to someone in need. Join us and make a difference.
                </p>
                <button className="donate-button">Become a Donor</button>
            </div>
            <div className="info-section">
                <div className="info-card">
                    <h2 className="info-title">Why Donate Blood?</h2>
                    <p className="info-description">Donating blood is a simple act that can save lives. It only takes a few minutes to give blood, but it can make a lifetime of difference for someone in need.</p>
                </div>
                <div className="info-card">
                    <h2 className="info-title">Who Can Donate?</h2>
                    <p className="info-description">Most healthy adults can donate blood. Check our guidelines to see if you qualify and join our community of lifesavers today.</p>
                </div>
                <div className="info-card">
                    <h2 className="info-title">How to Prepare?</h2>
                    <p className="info-description">Before donating, make sure to stay hydrated, eat a healthy meal, and get a good night's sleep. Follow our preparation tips for a smooth donation experience.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
