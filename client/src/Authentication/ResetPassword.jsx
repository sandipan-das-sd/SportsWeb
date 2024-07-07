// // ResetPassword.jsx

// import { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import Footer from "../components/Footer/Footer"
// const ResetPassword = () => {
//   const { email } = useParams();
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5800/api/verify-otp', { otp, password });
//       if (response.data.code === 200) {
//         toast.success('Password updated successfully.');
//         navigate('/email');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error updating password:', error);
//       toast.error('Failed to update password. Please try again.');
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//     <div className="max-w-md mx-auto mt-8">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
//           placeholder="New Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
//           placeholder="Confirm New Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-indigo-500 text-white py-3 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         >
//           {loading ? 'Updating Password...' : 'Update Password'}
//         </button>
//       </form>
      
//     </div>
//     <div className=' mt-14'>
//     <Footer  />
//     </div>
//     </>
//   );
// };

// export default ResetPassword;
// ResetPassword.jsx

import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Footer from "../components/Footer/Footer";

const ResetPassword = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResendOTP = async () => {
    try {
      const response = await axios.post(`http://localhost:5173/forgot-password/resend-otp/${email}`);
      if (response.data.code === 200) {
        toast.success('OTP has been resent to your email.');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error('Failed to resend OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5800/api/verify-otp', { otp, password });
      if (response.data.code === 200) {
        toast.success('Password updated successfully.');
        navigate('/email');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Failed to update password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full bg-gray-100 border border-transparent rounded p-3 outline-none focus:bg-white focus:border-indigo-400"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-3 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {loading ? 'Updating Password...' : 'Update Password'}
          </button>
        </form>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={handleResendOTP}
          className="text-indigo-600 hover:underline focus:outline-none"
        >
          Resend OTP
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
