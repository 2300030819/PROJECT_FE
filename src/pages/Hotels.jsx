import React from "react";
import "../components/Hotels.css"; // Import the CSS file

const hotelsData = [
  {
    id: 1,
    name: "Novotel Vijayawada Varun",
    location: "MG Road, Vijayawada",
    rating: 4.5,
    price: "₹6,000 - ₹9,000/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203609351.jpg", // Sample image
  },
  {
    id: 2,
    name: "The Gateway Hotel MG Road",
    location: "MG Road, Vijayawada",
    rating: 4.4,
    price: "₹4,500 - ₹7,500/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209748837.jpg",
  },
  {
    id: 3,
    name: "Taj Krishna",
    location: "Banjara Hills, Hyderabad",
    rating: 4.7,
    price: "₹9,000 - ₹15,000/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237644375.jpg",
  },
  {
    id: 4,
    name: "ITC Kohenur",
    location: "HITEC City, Hyderabad",
    rating: 4.6,
    price: "₹8,500 - ₹14,000/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/187927946.jpg",
  },
  {
    id: 5,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    rating: 4.9,
    price: "₹40,000 - ₹60,000/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/212738638.jpg",
  },
  {
    id: 6,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    rating: 4.8,
    price: "₹35,000 - ₹55,000/night",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/250632869.jpg",
  }
];

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h1>Hotels in Vijayawada, Hyderabad, and India</h1>
      <div className="hotels-grid">
        {hotelsData.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>⭐ {hotel.rating} / 5</p>
            <p>{hotel.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
