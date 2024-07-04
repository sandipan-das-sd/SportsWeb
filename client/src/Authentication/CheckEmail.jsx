import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function CheckEmail() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
const navigate=useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sports-web-server.vercel.app/api/login", {
        email: data.email,
        password: data.password
      }, { withCredentials: true });
      console.log(response.data);
  
      if (response.data.success) {
        // Save token to localStorage
        localStorage.setItem('token', response.data.token);
  
        // Show success message using toast
        toast.success(response.data.message);
  
        // Redirect based on user type
        if (response.data.user.email === "debadmin@gmail.com" && response.data.user.password === "debadmin$2024") {
          navigate('/admin');
          toast.success(response.data.message);
        
         
        } else {
          navigate('/upcoming-matches');
        }
      } else {
        toast.error(response.data.message || "An error occurred");
      }
  
      console.log(response.data);
      
      // Handle successful responses here
    } catch (error) {
      // Handle errors here
      toast.error(error.response.data.message || "An error occurred");
  
      console.error("There was an error!", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-xl text-gray-600 max-w">
          Or{" "}
          <Link to="#" className="font-medium text-blue-600 hover:text-blue-500">
            <strong>create an account</strong>
          </Link>
        </p>
      </div>

      <div className="mt-8 mx-3 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleOnChange}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={handleOnChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" />
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" />
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


