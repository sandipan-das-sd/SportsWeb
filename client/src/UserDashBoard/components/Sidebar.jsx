
// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';
// import { FcStatistics } from "react-icons/fc";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsTable } from "react-icons/bs";
// import { SiGooglemaps } from "react-icons/si";
// import { LuLogIn } from "react-icons/lu";
// import { TfiNewWindow } from "react-icons/tfi";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { FcAbout } from "react-icons/fc";
// import { FaHouseUser } from "react-icons/fa";

// export default function Sidebar() {
//     const [showSidebar, setShowSidebar] = useState(false); // Initially closed

//     useEffect(() => {
//         // Close sidebar on page load for mobile view
//         if (window.innerWidth <= 768) {
//             setShowSidebar(false);
//         }
//     }, []);

//     const toggleSidebar = () => {
//         setShowSidebar(!showSidebar); // Toggle sidebar state
//     };

//     return (
//         <>
//             <AdminNavbar
//                 showSidebar={showSidebar ? 'left-0' : '-left-64'}
//                 setShowSidebar={setShowSidebar}
//             />
//             <div
//                 className={`h-screen fixed top-0 md:left-0 ${showSidebar ? 'left-0' : '-left-64'} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-orange-300 w-64 z-10 py-4 px-6 transition-all duration-300`}
//             >
//                 <div className="flex flex-col items-stretch min-h-full flex-nowrap px-0 relative">
//                     <button
//                         className="absolute top-4 right-4 md:hidden z-20" // Adjusted z-index to ensure button is above sidebar
//                         onClick={toggleSidebar}
//                     >
//                         {/* Toggle button icon */}
//                         <svg
//                             className="w-6 h-6 text-gray-600"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             {showSidebar ? (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             ) : (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 />
//                             )}
//                         </svg>
//                     </button>
//                     <a
//                         href="#"
//                         target="_blank"
//                         rel="noreferrer"
//                         className="mt-2 text-center w-full inline-block"
//                     >
//                         <h6 className="text-gray-600 flex items-center justify-center">
//                             User Dashboard
//                             <span className="ml-4">
//                                 <FaHouseUser className="w-6 h-6" />
//                             </span>
//                         </h6>
//                     </a>
//                     <div className="flex flex-col">
//                         <hr className="my-4 min-w-full" />

//                         <ul className="flex-col min-w-full flex list-none">
//                             <li className="rounded-lg mb-4">
//                                 <NavLink
//                                     to="/"
//                                     exact
//                                     className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg transition-colors duration-200"
//                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                                 >
//                                     <AiOutlineDashboard alt="Dashboard Icon" className="w-6 h-6" />
//                                     Dashboard
//                                 </NavLink>
//                             </li>
//                             <li className="rounded-lg mb-2">
//                                 <NavLink
//                                     to="/settings"
//                                     className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg transition-colors duration-200"
//                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                                 >
//                                     <IoSettingsOutline alt="Settings Icon" className="w-6 h-6" />
//                                     Settings
//                                 </NavLink>
//                             </li>
//                             <li className="rounded-lg mb-2">
//                                 <NavLink
//                                     to="/tables"
//                                     className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg transition-colors duration-200"
//                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                                 >
//                                     <BsTable alt="Tables Icon" className="w-6 h-6" />
//                                     Tables
//                                 </NavLink>
//                             </li>
//                             <li className="rounded-lg mb-2 text-gray-700">
//                                 <NavLink
//                                     to="/maps"
//                                     className="flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg transition-colors duration-200"
//                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                                 >
//                                     <SiGooglemaps alt="Maps Icon" className="w-6 h-6" />
//                                     Maps
//                                 </NavLink>
//                             </li>
//                             <li className="px-4 rounded-lg mb-2 text-gray-700">
//                                 <a
//                                     href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     <LuLogIn alt="Login Icon" className="w-6 h-6" />
//                                     Login
//                                 </a>
//                             </li>
//                             <li className="px-4 rounded-lg mb-2 text-gray-700">
//                                 <a
//                                     href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     <TfiNewWindow alt="Register Icon" className="w-6 h-6" />
//                                     Register
//                                 </a>
//                             </li>
//                             <li className="px-4 rounded-lg mb-2 text-gray-700">
//                                 <a
//                                     href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     <FaIndianRupeeSign alt="Landing Page Icon" className="w-6 h-6" />
//                                     Payment Status
//                                 </a>
//                             </li>
//                             <li className="px-4 rounded-lg mb-2 text-gray-700">
//                                 <a
//                                     href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     <CgProfile alt="Profile Page Icon" className="w-6 h-6" />
//                                     Profile Page
//                                 </a>
//                             </li>
//                         </ul>
//                         <div className=' border-t-2 border-orange-500'></div>
//                         <ul className="flex-col min-w-full flex list-none absolute bottom-0">
//                             <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-black mb-2">
//                                 <a
//                                     href="https://material-tailwind.com/documentation/quick-start"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     <FcAbout alt="Documentation Icon" className="w-6 h-6" />
//                                     About US
//                                 </a>
//                             </li>
//                             <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
//                                 <a
//                                     href=""
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="flex items-center justify-center gap-4 text-sm font-light py-3 transition-colors duration-200"
//                                 >
//                                     Statistics < FcStatistics className="w-6 h-6" />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { FcStatistics } from "react-icons/fc";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTable } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { LuLogIn } from "react-icons/lu";
import { TfiNewWindow } from "react-icons/tfi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { FaHouseUser } from "react-icons/fa";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false); // Initially closed

    useEffect(() => {
        // Close sidebar on page load for mobile view
        if (window.innerWidth <= 768) {
            setShowSidebar(false);
        }
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); // Toggle sidebar state
    };

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar ? 'left-0' : '-left-64'}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar ? 'left-0' : '-left-64'} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-gray-800 w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <button
                        className="absolute top-4 right-4 md:hidden z-5" // Adjusted z-index to ensure button is above sidebar
                        onClick={toggleSidebar}
                    >
                        {/* Toggle button icon */}
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {showSidebar ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h6 className="text-white flex items-center justify-center">
                            User Dashboard
                            <span className="ml-4">
                                <FaHouseUser className="w-6 h-6" />
                            </span>
                        </h6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg transition-colors duration-200"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <AiOutlineDashboard alt="Dashboard Icon" className="w-6 h-6" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg transition-colors duration-200"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <IoSettingsOutline alt="Settings Icon" className="w-6 h-6" />
                                    Settings
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg transition-colors duration-200"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <BsTable alt="Tables Icon" className="w-6 h-6" />
                                    Tables
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-white">
                                <NavLink
                                    to="/maps"
                                    className="flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg transition-colors duration-200"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <SiGooglemaps alt="Maps Icon" className="w-6 h-6" />
                                    Maps
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-white">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    <LuLogIn alt="Login Icon" className="w-6 h-6" />
                                    Login
                                </a>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-white">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    <TfiNewWindow alt="Register Icon" className="w-6 h-6" />
                                    Register
                                </a>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-white">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    <FaIndianRupeeSign alt="Landing Page Icon" className="w-6 h-6" />
                                    Payment Status
                                </a>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-white">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    <CgProfile alt="Profile Page Icon" className="w-6 h-6" />
                                    Profile Page
                                </a>
                            </li>
                        </ul>
                        <div className=' border-t-2 border-white'></div>
                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    <FcAbout alt="Documentation Icon" className="w-6 h-6" />
                                    About US
                                </a>
                            </li>
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3 transition-colors duration-200"
                                >
                                    Statistics < FcStatistics className="w-6 h-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
