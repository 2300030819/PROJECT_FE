import React from "react";
import "./userprofile.css"; // Create this CSS file for styling

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1 className="user-profile-title">Your Profile</h1>
      <div className="user-profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Joined:</strong> January 2025</p>
      </div>
    </div>
  );
};

export default UserProfile;