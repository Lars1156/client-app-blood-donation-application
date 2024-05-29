import React from 'react';
import './css.files/about.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <h1 className="aboutus-title">About Us</h1>
            <div className="aboutus-content">
                <div className="aboutus-card">
                    <h2 className="aboutus-subtitle">Our Mission</h2>
                    <p className="aboutus-description">
                        Our mission is to ensure a reliable and safe blood supply for patients in need. We strive to create awareness about the importance of blood donation and to support our community through continuous blood drives and educational campaigns.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h2 className="aboutus-subtitle">Our Vision</h2>
                    <p className="aboutus-description">
                        We envision a world where every patient has access to safe blood when they need it. Our goal is to inspire more people to donate blood regularly and to create a culture of altruism and community support.
                    </p>
                </div>
                <div className="aboutus-card">
                    <h2 className="aboutus-subtitle">Our Values</h2>
                    <p className="aboutus-description">
                        We believe in the power of community, compassion, and commitment. We are dedicated to maintaining the highest standards of safety, transparency, and respect for all donors and recipients.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
