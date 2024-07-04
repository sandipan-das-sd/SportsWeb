

// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types'; // Import PropTypes for type validation
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Component imports
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import BrandsLogo from "./components/BrandsLogo/BrandsLogo";
// import Services from "./components/Services/Services";
// import Testimonial from "./components/Testimonial/Testimonial";
// import BlogsComp from "./components/Blogs/BlogsComp";
// import Footer from "./components/Footer/Footer";
// import UpcomingMatches from "./components/Upcoming Matches/UpcomingMatches";
// import UpcomingModal from "./components/Upcoming Matches/UpcomingModal";
// import AdminApp from "./AdminPanel/AdminApp";
// import CheckEmail from "./Authentication/CheckEmail";

// import { Toaster } from "react-hot-toast";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <>
//       <Toaster />
//       <Router>
//         <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
//           <Layout>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
//               <Route path="/admin" element={<AdminApp />} />
//               <Route path="/email" element={<CheckEmail />} />
//             </Routes>
//           </Layout>
//         </div>
//       </Router>
//     </>
//   );
// };

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin');
//   const isCheckEmailRoute = location.pathname.startsWith('/email');

//   return (
//     <>
//       {!isAdminRoute && !isCheckEmailRoute && <Navbar />}
//       {children}
//       {!isAdminRoute && !isCheckEmailRoute && <Footer />}
//     </>
//   );
// };

// // Define PropTypes for children in Layout component
// Layout.propTypes = {
//   children: PropTypes.node, // PropTypes.node is used for any React node (including numbers, strings, elements, or an array)
// };

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     // Show the modal when the component is first mounted
//     setIsModalOpen(true);
//   }, []);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {isModalOpen && <UpcomingModal closeModal={closeModal} />}
//       <Hero />
//       <BrandsLogo />
//       <Services />
//       <Testimonial />
//       <BlogsComp />
//     </>
//   );
// };

// const UpcomingMatchesPage = () => {
//   return (
//     <>
//       <UpcomingMatches />
//       <BlogsComp />
//     </>
//   );
// };

// export default App;
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes for type validation
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios"

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();

    // Check if user is authenticated on app mount
    const token = localStorage.getItem('token'); 
    if (token) {
     
      setIsLoggedIn(true);

      // Example: Check if user is admin based on backend response
      fetchUserDetails(token);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get("https://sports-web-server.vercel.app/user-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // Make sure to send cookies
      });

      if (response.data.isAdmin) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error fetching user details or unauthorized access
    }
  };

  return (
    <>
      <Toaster />
      <Router>
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Layout isAdmin={isAdmin} isLoggedIn={isLoggedIn}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
              <PrivateRoute path="/admin" element={<AdminApp />} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
              <Route path="/email" element={<CheckEmail />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </>
  );
};

const Layout = ({ children, isAdmin, isLoggedIn }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isCheckEmailRoute = location.pathname.startsWith('/email');

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      {!isAdminRoute && !isCheckEmailRoute && <Navbar />}
      {children}
      {!isAdminRoute && !isCheckEmailRoute && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const PrivateRoute = ({ element, isLoggedIn, isAdmin }) => {
  if (!isLoggedIn) {
    return <Navigate to="/email" replace />;
  }

  if (isAdmin) {
    return element;
  } else {
    return <Navigate to="/upcoming-matches" replace />;
  }
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
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
