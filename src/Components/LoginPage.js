import React, { useState } from 'react';
import './css.files/admin.css'; 

const AdminLogin = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Admin Login Data:', loginData);
    };

    return (
        <div className="admin-login-container">
            <h1 className="admin-login-title">Admin Login</h1>
            <form className="admin-login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className="admin-login-input"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="admin-login-input"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="admin-login-button">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
