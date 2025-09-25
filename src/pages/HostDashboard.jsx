import React from "react";
import { useNavigate } from "react-router-dom";
import "./HostDashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleManageSettings = () => {
    navigate("/host/settings");
  };

  const handleAddHotel = () => {
    navigate("/host/add-hotel");
  };

  const handleManageHotels = () => {
    navigate("/host/manage-hotels");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Host Dashboard</h1>

      <div className="dashboard-content">
        <p>
          Welcome to your dashboard! As a host, you can manage hotel listings, add new hotels,
          and approve or reject pending requests.
        </p>

        <div className="dashboard-actions">
          <button className="dashboard-button" onClick={handleAddHotel}>
            ➕ Add Hotel
          </button>
          <button className="dashboard-button" onClick={handleManageHotels}>
            🏨 Manage Hotels
          </button>
          <button className="dashboard-button" onClick={handleManageSettings}>
            ⚙ Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
