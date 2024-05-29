import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css.files/doner.css';

const DonorRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bloodType: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donor Registration Data:', formData);
        // Handle form submission logic here
    };

    return (
        <div className="registration-container">
            <h1 className="registration-title">Blood Donor Registration</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bloodType">Blood Type</label>
                    <select
                        name="bloodType"
                        className="form-control"
                        value={formData.bloodType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your blood type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        className="form-control"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary registration-button">Register</button>
            </form>
        </div>
    );
};

export default DonorRegistration;
