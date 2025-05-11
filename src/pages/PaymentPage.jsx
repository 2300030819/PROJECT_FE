import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate(); // Add this line

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");

    // Navigate to confirmation page
    navigate("/confirmation");
  };

  return (
    <div className="payment-wrapper">
      <h2 className="page-title">Payment Details</h2>

      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>

          {paymentMethod === "card" && (
            <>
              <label>Cardholder Name</label>
              <input type="text" placeholder="Enter name" required />

              <label>Card Number</label>
              <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required />

              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" required />

              <label>CVV</label>
              <input type="password" placeholder="*" required />
            </>
          )}

          {paymentMethod === "upi" && (
            <>
              <label>UPI ID</label>
              <input type="text" placeholder="yourname@upi" required />
            </>
          )}

          {paymentMethod === "netbanking" && (
            <>
              <label>Select Your Bank</label>
              <select required>
                <option value="">-- Choose Bank --</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra</option>
              </select>
            </>
          )}

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;