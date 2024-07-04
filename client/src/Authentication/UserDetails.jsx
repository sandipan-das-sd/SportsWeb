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

        const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = response.data.data;
        setUser(userData);

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
              {/* Add more fields as needed */}
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <p>Loading user details...</p>
          </div>
        )}
      </div>
    </div>
  );
}
