

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';

export default function CheckEmail() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const response = await axios.post("https://sports-web-server.vercel.app/api/login", {
  //     //   email: data.email,
  //     //   password: data.password

  //     const response = await axios.post("http://localhost:5800/api/login", {
  //         email: data.email,
  //         password: data.password
  //     }, { withCredentials: true });

  //     // const response = await axios.post("http://localhost:5800/api/login", {
  //     //   email: data.email,
  //     //   password: data.password
  //     // }, { withCredentials: true });


  
  //     console.log(response.data);
  
  //     if (response.data.success) {
  //       // Save token to localStorage
  //       localStorage.setItem('token', response.data.token);
  
  //       // Show success message using toast
  //       toast.success(response.data.message);
  
  //       // Redirect based on user type
  //       if (response.data.admin && response.data.admin.email === "debadmin@gmail.com") {
  //         console.log("Navigating to /admin");
         
  //         // Navigate to /admin if the user is an admin
        
  //         navigate('/admin');
  //       } else {
  //         const userId = response.data.user._id; // Verify this field exists in the response
  //         console.log("Navigating to /details with user ID:", userId);

         
  //         // Navigate to /details for regular users
  //         navigate(`/details/${userId}`);
  //       }
  //     } else {
  //       toast.error(response.data.message || "An error occurred");
  //     }
  //   } catch (error) {
  //     // Handle errors here
  //     toast.error(error.response?.data?.message || "An error occurred");
  //     console.error("There was an error!", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5800/api/login", {
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
        if (response.data.admin && response.data.admin.email === "debadmin@gmail.com") {
          console.log("Navigating to /admin");
          
          // Delay navigation to ensure the state is updated
          setTimeout(() => navigate('/admin'), 1000);
        } else if (response.data.user && response.data.user._id) {
          const userId = response.data.user._id;
          console.log("Navigating to /details with user ID:", userId);
  
          // Delay navigation to ensure the state is updated
          setTimeout(() => navigate(`/details/${userId}`), 1000);
        } else {
          toast.error("Invalid response from server");
        }
      } else {
        toast.error(response.data.message || "An error occurred");
      }
    } catch (error) {
      // Handle errors here
      toast.error(error.response?.data?.message || "An error occurred");
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
          <Link to="/signup" className="font-medium text-primary hover:text-blue-500">
            <strong>create an account</strong>
          </Link>
        </p>
      </div>
    

      <div className="mt-8 mx-3 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-6" role="alert">
            <div className="flex">
              <div className="py-1">
                <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
              </div>    
              <div>
                <p className="font-bold">Third Party Login  Won&apos;t Work</p>
                <p className="text-sm">Google, Facebook, and Twitter login require payment-based permission from the providers.</p>
              </div>
            </div>
            </div>
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
                  className="h-4 w-4 text-primary focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-primary hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
