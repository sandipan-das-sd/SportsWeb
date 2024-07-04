import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast } from "react-hot-toast";

export default function UserDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("https://sports-web-server.vercel.app/api/user-details", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(response.data);
        // Display user details or update state as needed
      } catch (error) {
        console.error("Error fetching user details:", error);
        if (error.response && error.response.status === 401) {
          // Handle session expired
          localStorage.removeItem('token');
          dispatch(logout());
          toast.error("Session expired. Please login again.");
          navigate("/login");
        } else {
          // Handle other errors
          toast.error("An error occurred. Please try again.");
        }
      }
    };

    fetchUserDetails();
  }, [navigate, dispatch]);

  return (
    <div>
      {/* Render user details here */}
    </div>
  );
}
