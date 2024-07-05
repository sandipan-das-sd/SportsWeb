// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { toast } from "react-hot-toast";

// export default function UserDetails() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           navigate('/email');
//           return;
//         }

//         // const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         // });


//         const response = await axios.get("http://localhost:5800/api/user-details", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const userData = response.data.data;
//         setUser(userData);
//         console.log(userData)

//         // Store user details in local storage
//         localStorage.setItem('user', JSON.stringify(userData));

//         // Store user details in cookies
//         Cookies.set('user', JSON.stringify(userData), { expires: 7 });

//         // Redirect to admin if user is admin
//         if (userData.isAdmin) {
//           navigate('/admin');
//         }

//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         if (error.response && error.response.status === 401) {
//           // Handle session expired
//           localStorage.removeItem('token');
//           Cookies.remove('user');
//           toast.error("Session expired. Please login again.");
//           navigate("/email");
//         } else {
//           // Handle other errors
//           toast.error("An error occurred. Please try again.");
//         }
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             User Details
//           </h2>
//         </div>
//         {user ? (
//           <div className="mt-8 space-y-6">
//             <div className="flex flex-col space-y-4">
//               <div className="flex flex-col items-start">
//                 <label className="text-gray-600 font-medium">User ID:</label>
//                 <p className="text-gray-800">{user.id}</p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <label className="text-gray-600 font-medium">Email:</label>
//                 <p className="text-gray-800">{user.email}</p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <label className="text-gray-600 font-medium">Photo:</label>
//                 <p className="text-gray-800">{user.photo}</p>
//               </div>

//               <div className="flex flex-col items-start">
//                 <label className="text-gray-600 font-medium">Phone:</label>
//                 <p className="text-gray-800">{user.mobile}</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="mt-8 space-y-6">
//             <button type="button" className="bg-indigo-500 ..." disabled>
//               <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

//               </svg>
//               loading...
//             </button>
//           </div>
//         )}
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/email');
          return;
        }

        // const response = await axios.get("http://localhost:5800/api/user-details", {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });
                const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });

        const userData = response.data.data;
        setUser(userData);
        console.log(userData)

        // Store user details in local storage
        localStorage.setItem('user', JSON.stringify(userData));

        // Store user details in cookies
        Cookies.set('user', JSON.stringify(userData), { expires: 7 });

        // Redirect to admin if user is admin
        if (userData.isAdmin) {
          navigate('/admin');
        }

      } catch (error) {
        console.error("Error fetching user details:", error);
        if (error.response && error.response.status === 401) {
          // Handle session expired
          localStorage.removeItem('token');
          Cookies.remove('user');
          toast.error("Session expired. Please login again.");
          navigate("/email");
        } else {
          // Handle other errors
          toast.error("An error occurred. Please try again.");
        }
      }
    };

    fetchUserDetails();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            User Details
          </h2>
        </div>
        {user ? (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start">
                <label className="text-gray-600 font-medium">User ID:</label>
                <p className="text-gray-800">{user.id}</p>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-gray-600 font-medium">Email:</label>
                <p className="text-gray-800">{user.email}</p>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-gray-600 font-medium">Photo:</label>
                <img src={user.photo} alt="User Photo" className="w-20 h-20 rounded-full" />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-gray-600 font-medium">Phone:</label>
                <p className="text-gray-800">{user.mobile}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <button type="button" className="bg-indigo-500 ..." disabled>
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              Loading...
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
