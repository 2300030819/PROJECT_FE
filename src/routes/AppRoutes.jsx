import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hotels from "../pages/Hotels";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import HostDashboard from "../pages/HostDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ManageUsers from "../pages/ManageUsers";
import UserProfile from "../pages/UserProfile";
import Register1 from "../pages/Register1";
import BookingPage from "../pages/BookingPage";
import HostSettings from "../pages/HostSettings";
import AddHotel from "../pages/AddHotel";
import ManageHotels from "../pages/ManageHotels";
import PaymentPage from "../pages/PaymentPage";
import ConfirmationPage from "../pages/ConfirmationPage"; // ✅ Confirmation page

const AppRoutes = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register1" element={<Register1 />} />
            <Route path="/register" element={<Register1 />} /> {/* Optional duplicate */}
            <Route path="/booking/:hotelId" element={<BookingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} /> {/* ✅ Added this line */}

            {/* User Routes */}
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/profile" element={<UserProfile />} />

            {/* Host Routes */}
            <Route path="/host/dashboard" element={<HostDashboard />} />
            <Route path="/host/settings" element={<HostSettings />} />
            <Route path="/host/add-hotel" element={<AddHotel />} />
            <Route path="/host/manage-hotels" element={<ManageHotels />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;