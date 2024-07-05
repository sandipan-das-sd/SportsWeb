


import { useState, useRef } from 'react';
import uploadFiles from "./../helpers/uploadFiles";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate ,Link} from 'react-router-dom';

export default function SignUp() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    photo: null,
    photoUrl: ''
  });
  const [photoUploadMessage, setPhotoUploadMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handlePhotoUpload = async () => {
    if (formData.photo) {
      const uploadResponse = await uploadFiles(formData.photo);
      setFormData((prev) => ({
        ...prev,
        photoUrl: uploadResponse.secure_url
      }));
      setPhotoUploadMessage('Photo uploaded successfully');
      toast.success('Photo uploaded successfully');
    }
  };

  const handleClearPhoto = () => {
    setFormData((prev) => ({
      ...prev,
      photo: null,
      photoUrl: ''
    }));
    setPhotoUploadMessage('');
    fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.photo && !formData.photoUrl) {
      await handlePhotoUpload();
    }

    try {
      const response = await fetch('https://sports-web-server.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },


      // const response = await fetch('http://localhost:5800/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile,
          photo: formData.photoUrl
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Registration successful');
        navigate('/email')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred during registration');
    }
  };

  return (
    <div>
      <Toaster />
      <div className="p-10">
        <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold" htmlFor="name">Name</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="name"
                type="text"
                name="name"
                required
                autoFocus
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="email">Email</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="password">Password</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="password"
                type="password"
                name="password"
                required
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                required
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="confirmPassword">Phone</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="mobile"
                type="password"
                name="mobile"
                required
                
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            {/* <div className="mt-4">
              <label className="block font-semibold" htmlFor="mobile">Phone Number</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="mobile"
                type="text"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div> */}

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="photo">Upload Photo</label>
              <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                id="photo"
                type="file"
                name="photo"
                ref={fileInputRef}
                onChange={handleChange}
              />
              {formData.photo && (
                <div className="mt-2 flex items-center">
                  <span className="text-sm">{formData.photo.name}</span>
                  <button
                    type="button"
                    onClick={handleClearPhoto}
                    className="ml-2 text-red-500"
                  >
                    &#x2716;
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                type="submit"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Register
              </button>
              <Link to="/email" className="font-semibold">
                Already registered?<span className='text-primary mr-2'>Login</span>    
              </Link>
            </div>
          </form>
          

          <aside className="">
            <div className="bg-gray-100 p-8 rounded">
              <h2 className="font-bold text-2xl">Instructions</h2>
              <ul className="list-disc mt-4 list-inside">
                <li>All users must provide a valid email address and password to create an account.</li>
                <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information.</li>
                <li>Users must not create multiple accounts for the same person.</li>
                <li><span className='text-red-600'>****</span>Users must not upload more than  <span className=' text-primary font-bold'>150Kb Image</span><span className='text-red-600'>****</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
