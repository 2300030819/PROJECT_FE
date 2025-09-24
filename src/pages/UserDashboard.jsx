import React from "react";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/user/profile");
  };

  return (
    <div className="user-dashboard-container">
      <h1 className="user-dashboard-title">User Dashboard</h1>

      <div className="user-dashboard-content">
        <p>
          Welcome to your dashboard! Manage your bookings, update your profile, and explore personalized deals.
        </p>

        <button className="user-dashboard-button" onClick={handleViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
