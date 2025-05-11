import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Hotels.css"; // Make sure this path is correct

const hotelsData = [
  {
    id: 1,
    name: "Novotel Vijayawada Varun",
    location: "MG Road, Vijayawada",
    rating: 4.5,
    minPrice: 6000,
    maxPrice: 9000,
    image: "/hotel1.jpeg",
    description: "A luxurious stay in Vijayawada with modern amenities, rooftop dining, and a swimming pool.",
  },
  {
    id: 2,
    name: "The Gateway Hotel MG Road",
    location: "MG Road, Vijayawada",
    rating: 4.4,
    minPrice: 4500,
    maxPrice: 7500,
    image: "/hotel2.jpeg",
    description: "A comfortable hotel with excellent service, located in the heart of Vijayawada.",
  },
  {
    id: 3,
    name: "Taj Krishna",
    location: "Banjara Hills, Hyderabad",
    rating: 4.7,
    minPrice: 9000,
    maxPrice: 15000,
    image: "/hotel3.jpeg",
    description: "A premium hotel in Hyderabad with world-class facilities and stunning city views.",
  },
  {
    id: 4,
    name: "ITC Kohenur",
    location: "HITEC City, Hyderabad",
    rating: 4.6,
    minPrice: 8500,
    maxPrice: 14000,
    image: "/hotel4.jpeg",
    description: "A modern luxury hotel in HITEC City, Hyderabad, offering a blend of comfort and elegance.",
  },
  {
    id: 5,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    rating: 4.9,
    minPrice: 40000,
    maxPrice: 60000,
    image: "/hotel5.jpg",
    description: "A royal experience in Udaipur with breathtaking views, fine dining, and heritage architecture.",
  },
  {
    id: 6,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    rating: 4.8,
    minPrice: 35000,
    maxPrice: 55000,
    image: "/hotel6.jpeg",
    description: "A floating palace in Udaipur offering an unforgettable luxury experience.",
  },
];

const Hotels = () => {
  const navigate = useNavigate();

  const handleBookingClick = (hotel) => {
    navigate(`/booking/${hotel.id}`, { state: { hotel } });
  };

  return (
    <div className="hotels-container">
      <h1 className="hotels-heading">Hotels in Vijayawada, Hyderabad, and India</h1>
      <div className="hotels-grid">
        {hotelsData.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img
              src={hotel.image}
              alt={`Image of ${hotel.name} `}
              className="hotel-image"
            />
            <div className="hotel-info">
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
              <p>⭐ {hotel.rating} / 5</p>
              <p>₹{hotel.minPrice.toLocaleString()} - ₹{hotel.maxPrice.toLocaleString()}/night</p>
              <p className="hotel-desc">{hotel.description}</p>
              <button className="book-btn" onClick={() => handleBookingClick(hotel)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;