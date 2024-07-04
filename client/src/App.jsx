

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
// import UserDetails from "./Authentication/UserDetails";

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
//               <Route path="/details" element={<UserDetails />} />
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


// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Toaster, toast } from "react-hot-toast";

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
// import UserDetails from "./Authentication/UserDetails";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in",
//       delay: 100,
//     });
//     AOS.refresh();

//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const userData = response.data.data;
//         setUser(userData);
//         setLoading(false);

//         // Store user details in local storage
//         localStorage.setItem('user', JSON.stringify(userData));

//         // Store user details in cookies
//         Cookies.set('user', JSON.stringify(userData), { expires: 7 });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         if (error.response && error.response.status === 401) {
//           // Handle session expired
//           localStorage.removeItem('token');
//           Cookies.remove('user');
//           toast.error("Session expired. Please login again.");
//           setLoading(false);
//           navigate('/email'); // Redirect to login
//         } else {
//           // Handle other errors
//           toast.error("An error occurred. Please try again.");
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
//       </div>
//     );
//   }

//   const isAdmin = user?.isAdmin;

//   return (
//     <>
//       <Toaster />
//       <Router>
//         <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
//           <Layout isAdmin={isAdmin}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
//               <Route path="/admin" element={isAdmin ? <AdminApp /> : <Navigate to="/email" />} />
//               <Route path="/email" element={<CheckEmail />} />
//               <Route path="/details" element={<UserDetails />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </Layout>
//         </div>
//       </Router>
//     </>
//   );
// };

// const Layout = ({ children, isAdmin }) => {
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

// Layout.propTypes = {
//   children: PropTypes.node,
//   isAdmin: PropTypes.bool
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
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Toaster, toast } from "react-hot-toast";

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
import UserDetails from "./Authentication/UserDetails";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();

    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = response.data.data;
        setUser(userData);
        setLoading(false);

        // Store user details in local storage
        localStorage.setItem('user', JSON.stringify(userData));

        // Store user details in cookies
        Cookies.set('user', JSON.stringify(userData), { expires: 7 });
      } catch (error) {
        console.error("Error fetching user details:", error);
        if (error.response && error.response.status === 401) {
          // Handle session expired
          localStorage.removeItem('token');
          Cookies.remove('user');
          toast.error("Session expired. Please login again.");
          setLoading(false);
        } else {
          // Handle other errors
          toast.error("An error occurred. Please try again.");
          setLoading(false);
        }
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500">
        Loading...
        </div>
      </div>
    );
  }
  

  const isAdmin = user?.email === "debadmin@gmail.com";

  return (
    <>
      <Toaster />
      <Router>
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Layout isAdmin={isAdmin}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
              <Route path="/admin" element={isAdmin ? <AdminApp /> : <Navigate to="/email" />} />
              <Route path="/email" element={<CheckEmail />} />
              <Route path="/details" element={<UserDetails />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </>
  );
};

const Layout = ({ children, isAdmin }) => {
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

Layout.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool
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
