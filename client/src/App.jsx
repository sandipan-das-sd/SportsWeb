

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes for type validation
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import UpcomingMatches from "./components/Upcoming Matches/UpcomingMatches";
import UpcomingModal from "./components/Upcoming Matches/UpcomingModal";
import AdminApp from "./AdminPanel/AdminApp";
import CheckEmail from "./Authentication/CheckEmail";

import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Toaster />
      <Router>
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
              <Route path="/admin" element={<AdminApp />} />
              <Route path="/email" element={<CheckEmail />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isCheckEmailRoute = location.pathname.startsWith('/email');

  return (
    <>
      {!isAdminRoute && !isCheckEmailRoute && <Navbar />}
      {children}
      {!isAdminRoute && !isCheckEmailRoute && <Footer />}
    </>
  );
};

// Define PropTypes for children in Layout component
Layout.propTypes = {
  children: PropTypes.node, // PropTypes.node is used for any React node (including numbers, strings, elements, or an array)
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show the modal when the component is first mounted
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <UpcomingModal closeModal={closeModal} />}
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
    </>
  );
};

const UpcomingMatchesPage = () => {
  return (
    <>
      <UpcomingMatches />
      <BlogsComp />
    </>
  );
};

export default App;






