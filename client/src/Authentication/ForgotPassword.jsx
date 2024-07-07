// ForgotPassword.jsx

import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Footer from "../components/Footer/Footer"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5800/api/generate-otp', { email });
      if (response.data.code === 200) {
        toast.success('OTP sent successfully. Check your email.');
        navigate(`/forgot-password/verify/${email}`);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('Failed to send OTP. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 text-white py-3 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
      </form>
    
    </div>
    <div className=' mt-28'>
    <Footer/>
    </div>
    </>
  );
};

export default ForgotPassword;
