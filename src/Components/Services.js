import React from 'react';
import './css.files/services.css'; // Custom CSS for animations and 3D effects

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <div className="services-cards">
                <div className="service-card">
                    <h2 className="service-title">Blood Donation</h2>
                    <p className="service-description">Join our community of donors and save lives. Your donation can make a significant impact.</p>
                </div>
                <div className="service-card">
                    <h2 className="service-title">Health Check-ups</h2>
                    <p className="service-description">Regular health check-ups for donors to ensure their wellbeing before and after donation.</p>
                </div>
                <div className="service-card">
                    <h2 className="service-title">Awareness Campaigns</h2>
                    <p className="service-description">Participate in our campaigns to raise awareness about the importance of blood donation.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
