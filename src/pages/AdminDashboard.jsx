import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admindashboard.css"; // Ensure this file exists

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard-container">
      <h1 className="admin-dashboard-title">Admin Dashboard</h1>

      <div className="admin-dashboard-content">
        <p>
          Welcome to the admin dashboard! Here you can manage users, view
          reports, and configure settings.
        </p>

        <button
          className="admin-dashboard-button"
          onClick={() => navigate("/admin/manage-users")}
        >
          Manage Users
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
