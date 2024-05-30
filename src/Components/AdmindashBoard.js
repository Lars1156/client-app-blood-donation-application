import React from 'react';
import './css.files/admind.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard-container">
            <h1 className="admin-dashboard-title">Admin Dashboard</h1>
            <div className="admin-dashboard-content">
                <div className="card">
                    <h2>Manage Donors</h2>
                    <p>View and manage donor information</p>
                </div>
                <div className="card">
                    <h2>Manage Appointments</h2>
                    <p>Schedule and manage appointments</p>
                </div>
                <div className="card">
                    <h2>Reports</h2>
                    <p>Generate and view reports</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
