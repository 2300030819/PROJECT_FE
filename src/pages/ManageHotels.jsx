import React, { useState } from 'react';
import './ManageHotels.css';

const ManageHotels = () => {
  const [hotels, setHotels] = useState([
    { id: 1, name: 'Hotel Blue', location: 'Paris', price: '120', description: 'Nice view' },
    { id: 2, name: 'Green Stay', location: 'London', price: '90', description: 'Affordable luxury' }
  ]);

  const handleDelete = (id) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  return (
    <div className="manage-hotels-container">
      <h2>Manage Hotels</h2>
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p><strong>Location:</strong> {hotel.location}</p>
          <p><strong>Price:</strong> ${hotel.price}</p>
          <p><strong>Description:</strong> {hotel.description}</p>
          <button onClick={() => handleDelete(hotel.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageHotels;