import React, { useState } from 'react';
import './AddHotel.css';

const AddHotel = () => {
  const [hotel, setHotel] = useState({
    name: '',
    location: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel Added:', hotel);
    alert("Hotel added successfully!");
    setHotel({ name: '', location: '', price: '', description: '' });
  };

  return (
    <div className="add-hotel-container">
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={hotel.name} onChange={handleChange} placeholder="Hotel Name" required />
        <input name="location" value={hotel.location} onChange={handleChange} placeholder="Location" required />
        <input name="price" value={hotel.price} onChange={handleChange} placeholder="Price per Night" required />
        <textarea name="description" value={hotel.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotel;