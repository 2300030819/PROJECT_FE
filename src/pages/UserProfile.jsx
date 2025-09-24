import React from "react";
import "./UserProfile.css";
 // Create this CSS file for styling

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1 className="user-profile-title">Your Profile</h1>
      <div className="user-profile-details">
        <p><strong>Name:</strong> Yashu</p>
        <p><strong>Email:</strong> yash@example.com</p>
        <p><strong>Phone:</strong> +91 123456789</p>
        <p><strong>Joined:</strong> January 2025</p>
      </div>
    </div>
  );
};

export default UserProfile;
