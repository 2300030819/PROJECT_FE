import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hotels from "../pages/Hotels";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fragment } from "react";



const AppRoutes = () => {
  return (
    <Router>
      <Fragment style={{position:'relative', width:"100%"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
      <Footer />
      </Fragment>
    </Router>
  );
};

export default AppRoutes;
