
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { toast } from "react-hot-toast";

// export default function UserDetails() {
//   const [user, setUser] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           navigate('/email');
//           return;
//         }

//         const response = await axios.get("http://localhost:5800/api/user-details", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const userData = response.data.data;
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData));
//         Cookies.set('user', JSON.stringify(userData), { expires: 7 });

//         if (userData.isAdmin) {
//           navigate('/admin');
//         }

//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         if (error.response && error.response.status === 401) {
//           localStorage.removeItem('token');
//           Cookies.remove('user');
//           toast.error("Session expired. Please login again.");
//           navigate("/email");
//         } else {
//           toast.error("An error occurred. Please try again.");
//         }
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   // Function to toggle sidebar visibility
//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     Cookies.remove('user');
//     navigate('/');
//   };

//   // Function to handle payment
//   const handlePayment = () => {
//     if (user) {
//       const Userid = user.id;
//       navigate(`/payment/${Userid}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full bg-white z-50 shadow-lg w-64 overflow-y-auto transition-transform duration-300 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="py-4 px-6">
//           {/* Sidebar header */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-4">
//               <img src={user?.photo} alt="User Photo" className="w-12 h-12 rounded-full" />
//               <h2 className="text-xl font-semibold text-gray-800">{user?.fullname}</h2>
//             </div>
//             <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {showSidebar ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Sidebar menu */}
//           <nav>
//             <ul className="space-y-4">
//               <li>
//                 <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Upcoming Matches details will be added soon.")}>
//                   Upcoming Matches
//                 </button>
//               </li>
//               <li>
//                 <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Payment Status: Approved by Admin.")}>
//                   Payment Status
//                 </button>
//               </li>
//               <li>
//                 <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Score Details will be added soon.")}>
//                   Score Details
//                 </button>
//               </li>
//               <li>
//                 <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 min-w-0">
//         <div className="bg-white p-6 shadow-lg">
//           {/* Alert for under construction */}
//           <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center p-2">
//             <p className="text-white font-semibold">This page is under construction. Please wait for updates.</p>
//           </div>

//           {/* User Dashboard header */}
//           <h2 className="text-3xl font-semibold text-gray-800">User Dashboard</h2>
//           {user && (
//             <div className="mt-4 text-gray-600">
//               Welcome to your dashboard, <span className="font-bold">{user.name}!</span>
//             </div>
//           )}

//           {/* User Details */}
//           {user && (
//             <div className="mt-6">
//               <div className="border border-gray-200 shadow-md rounded-md p-4">
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-gray-600 font-medium">User ID:</p>
//                     <p className="text-gray-800">{user.id}</p>
//                     <button className="bg-slate-600" onClick={handlePayment}>Pay now</button>
//                   </div>
//                   <div>
//                     <p className="text-gray-600 font-medium">Email:</p>
//                     <p className="text-gray-800">{user.email}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600 font-medium">Phone:</p>
//                     <p className="text-gray-800">{user.mobile}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600 font-medium">Photo:</p>
//                     <img src={user.photo} alt="User Photo" className="w-20 h-20 rounded-full" />
//                   </div>
//                 </div>
//               </div>

//               {/* Scheduled Match Details */}
//               <div className="mt-8">
//                 <h3 className="text-xl font-semibold text-gray-800">Scheduled Match</h3>
//                 <div className="border border-gray-200 shadow-md rounded-md p-4 mt-4">
//                   <div className="space-y-2">
//                     <div>
//                       <p className="text-gray-600 font-medium">Tournament:</p>
//                       <p className="text-gray-800">Terrace Cup 8 Final</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Venue:</p>
//                       <p className="text-gray-800">Tiger Turf</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Time:</p>
//                       <p className="text-gray-800">11 am - 1 pm</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Weather Condition:</p>
//                       <p className="text-gray-800">50% chances of rain/light drizzle, Overcast</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Pitch Condition:</p>
//                       <p className="text-gray-800">Slow</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Payment Status:</p>
//                       <p className="text-green-600">Paid</p> {/* Example - Replace with dynamic data */}
//                     </div>
//                     <div>
//                       <p className="text-gray-600 font-medium">Score Details:</p>
//                       <p className="text-gray-800">To be updated</p> {/* Example - Replace with dynamic data */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/email');
          return;
        }

        const response = await axios.get("http://localhost:5800/api/user-details", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = response.data.data;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        Cookies.set('user', JSON.stringify(userData), { expires: 7 });

        if (userData.isAdmin) {
          navigate('/admin');
        }

      } catch (error) {
        console.error("Error fetching user details:", error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          Cookies.remove('user');
          toast.error("Session expired. Please login again.");
          navigate("/email");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    };

    const fetchMatches = async () => {
      try {
        const response = await axios.get("http://localhost:5800/api/get-matches");
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
        toast.error("Failed to fetch match details.");
      }
    };

    fetchUserDetails();
    fetchMatches();
  }, [navigate]);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    Cookies.remove('user');
    navigate('/');
  };

  // Function to handle payment
  const handlePayment = () => {
    if (user) {
      const userId = user.id;
      navigate(`/payment/${userId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white z-50 shadow-lg w-64 overflow-y-auto transition-transform duration-300 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="py-4 px-6">
          {/* Sidebar header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img src={user?.photo} alt="User Photo" className="w-12 h-12 rounded-full" />
              <h2 className="text-xl font-semibold text-gray-800">{user?.fullname}</h2>
            </div>
            <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {showSidebar ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Sidebar menu */}
          <nav>
            <ul className="space-y-4">
              <li>
                <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Upcoming Matches details will be added soon.")}>
                  Upcoming Matches
                </button>
              </li>
              <li>
                <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Payment Status: Approved by Admin.")}>
                  Payment Status
                </button>
              </li>
              <li>
                <button className="text-gray-800 hover:text-indigo-600 focus:outline-none" onClick={() => alert("Score Details will be added soon.")}>
                  Score Details
                </button>
              </li>
              <li>
                <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="bg-white p-6 shadow-lg">
          {/* Alert for under construction */}
          <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center p-2">
            <p className="text-white font-semibold">This page is under construction. Please wait for updates.</p>
          </div>

          {/* User Dashboard header */}
          <h2 className="text-3xl font-semibold text-gray-800">User Dashboard</h2>
          {user && (
            <div className="mt-4 text-gray-600">
              Welcome to your dashboard, <span className="font-bold">{user.name}!</span>
            </div>
          )}

          {/* User Details */}
          {user && (
            <div className="mt-6">
              <div className="border border-gray-200 shadow-md rounded-md p-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-medium">User ID:</p>
                    <p className="text-gray-800">{user.id}</p>
                    <button className="bg-slate-600 text-white px-4 py-2 rounded mt-2" onClick={handlePayment}>Pay now</button>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Email:</p>
                    <p className="text-gray-800">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Phone:</p>
                    <p className="text-gray-800">{user.mobile}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Photo:</p>
                    <img src={user.photo} alt="User Photo" className="w-20 h-20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Scheduled Match Details */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Upcoming Matches</h3>
                {matches.map((match) => (
                  <div key={match._id} className="border border-gray-200 shadow-md rounded-md p-4 mt-4">
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-600 font-medium">Date:</p>
                        <p className="text-gray-800">{new Date(match.date).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Venue:</p>
                        <p className="text-gray-800">{match.place}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Match Type:</p>
                        <p className="text-gray-800">{match.matchType}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Payment Amount:</p>
                        <p className="text-gray-800">Rs. {match.payment.amount}</p>
                      </div>
                      {match.score && (
                        <div>
                          <p className="text-gray-600 font-medium">Score:</p>
                          <p className="text-gray-800">{match.score}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-gray-600 font-medium">Stats Available:</p>
                        <p className="text-gray-800">{match.statsAvailable ? "Yes" : "No"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}