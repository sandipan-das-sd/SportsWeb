// import { useLocation } from 'react-router-dom';
// import Button from '@material-tailwind/react/Button';
// import Icon from '@material-tailwind/react/Icon';
// import NavbarInput from '@material-tailwind/react/NavbarInput';
// import Image from '@material-tailwind/react/Image';
// import Dropdown from '@material-tailwind/react/Dropdown';
// import DropdownItem from '@material-tailwind/react/DropdownItem';
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

// export default function AdminNavbar({ showSidebar, setShowSidebar }) {
//     const location = useLocation().pathname;

//     return (
//         <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
//             <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
//                 <div className="md:hidden">
//                     <Button
//                         color="transparent"
//                         buttonType="link"
//                         size="lg"
//                         iconOnly
//                         rounded
//                         ripple="light"
//                         onClick={() => setShowSidebar('left-0')}
//                     >
//                         <Icon name="menu" size="2xl" color="white" />
//                     </Button>
//                     <div
//                         className={`absolute top-2 md:hidden ${
//                             showSidebar === 'left-0' ? 'left-64' : '-left-64'
//                         } z-50 transition-all duration-300`}
//                     >
//                         <Button
//                             color="transparent"
//                             buttonType="link"
//                             size="lg"
//                             iconOnly
//                             rounded
//                             ripple="light"
//                             onClick={() => setShowSidebar('-left-64')}
//                         >
//                             <Icon name="close" size="2xl" color="white" />
//                         </Button>
//                     </div>
//                 </div>

//                 <div className="flex justify-between items-center w-full">
//                     <h4 className="uppercase text-white text-sm tracking-wider mt-1">
//                         {location === '/'
//                             ? 'DASHBOARD'
//                             : location.toUpperCase().replace('/', '')}
//                     </h4>

//                     <div className="flex">
//                         <NavbarInput placeholder="Search" />

//                         <div className="-mr-4 ml-6">
//                             <Dropdown
//                                 color="transparent"
//                                 buttonText={
//                                     <div className="w-12">
//                                         <Image src={ProfilePicture} rounded />
//                                     </div>
//                                 }
//                                 rounded
//                                 style={{
//                                     padding: 0,
//                                     color: 'transparent',
//                                 }}
//                             >
//                                 <DropdownItem color="lightBlue">
//                                     Action
//                                 </DropdownItem>
//                                 <DropdownItem color="lightBlue">
//                                     Another Action
//                                 </DropdownItem>
//                                 <DropdownItem color="lightBlue">
//                                     Something Else
//                                 </DropdownItem>
//                             </Dropdown>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../assets/img/team-1-800x800.jpg';
import { useState } from 'react';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar((prev) => (prev === 'left-0' ? '-left-64' : 'left-0'));
    };

    const handleProfileToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
            <div className="container mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        {/* Hamburger menu icon */}
                        <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {showSidebar === 'left-0' ? (
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
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            {/* Close icon */}
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="ml-4 relative">
                            <button
                                className="text-white focus:outline-none"
                                onClick={handleProfileToggle}
                            >
                                {/* Profile image */}
                                <img
                                    src={Image}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full"
                                />
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">
                                        Action
                                    </button>
                                    <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">
                                        Another Action
                                    </button>
                                    <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">
                                        Something Else
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

AdminNavbar.propTypes = {
    showSidebar: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    setShowSidebar: PropTypes.func.isRequired,
};
