// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Component import
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
// import Services from "./components/Services/Services";
// import Testimonial from "./components/Testimonial/Testimonial";
// import BlogsComp from "./components/Blogs/BlogsComp.jsx";
// import Footer from "./components/Footer/Footer";
// import UpcomingMatches from "./components/Upcoming Matches/UpcomingMatches.jsx";

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
//     <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <BrandsLogo />
//       <Services />
//       <Testimonial />
//       <BlogsComp />
//       <Footer />
//     </div>
//   );
// };

// export default App;




// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import UpcomingMatchesPage from "./components/Upcoming Matches/UpcomingMatches";

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
//     <Router>
//       <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/upcoming-matches" element={
//             <UpcomingMatchesPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <BrandsLogo />
//       <Services />
//       <Testimonial />
//       <BlogsComp />
//     </>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming-matches" element={<UpcomingMatchesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
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
