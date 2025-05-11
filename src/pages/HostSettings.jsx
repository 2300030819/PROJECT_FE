import React, { useState } from 'react';
import './HostSettings.css'; // Make sure you create this CSS file

const HostSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    notifications: true,
    availability: 'available',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved settings:', formData);
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <h2>Host Settings</h2>
      <p className="settings-subtext">
        Manage your profile, account preferences, and availability settings.
      </p>

      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          Receive email notifications
        </label>

        <label>
          Availability:
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="away">Away</option>
          </select>
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default HostSettings;