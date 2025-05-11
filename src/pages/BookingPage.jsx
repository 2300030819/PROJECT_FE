import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handlePaymentRedirect = () => {
    navigate("/payment", { state: { hotel } });
  };

  if (!hotel) {
    return (
      <div className="booking-container">
        <h2>Hotel details not found.</h2>
        <p>Please return to the hotels page and select a hotel again.</p>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h1>Booking: {hotel.name}</h1>
      <div className="booking-card">
        <img src={hotel.image} alt={hotel.name} className="booking-image" />
        <div className="booking-details">
          <p><strong>Location:</strong> {hotel.location}</p>
          <p><strong>Rating:</strong> ⭐ {hotel.rating} / 5</p>
          <p><strong>Price:</strong> {hotel.minPrice ? `₹${hotel.minPrice} - ₹${hotel.maxPrice}` : hotel.price} / night</p>

          {!bookingConfirmed ? (
            <button
              className="confirm-btn"
              onClick={() => setBookingConfirmed(true)}
            >
              Confirm Booking
            </button>
          ) : (
            <>
              <p className="confirmation-message">
                ✅ Booking Confirmed! You will receive a confirmation email shortly.
              </p>
              <button className="payment-btn" onClick={handlePaymentRedirect}>
                Proceed to Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;