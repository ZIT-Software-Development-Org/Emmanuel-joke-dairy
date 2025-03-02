import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

 function Login() {
  // const {formData, setFormData} = useState({
  //   email: "",
  //   password: "",
  // });
  const [formData, setFormData] = useState({ email: "", password: '' });
  
const [email, setEmail ] = useState("")
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData);
        alert('Login successful!');
        console.log(response.data);
    } catch (error) {
        alert('Login failed');
        console.error(error.response?.data?.message || error.message);
    }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Login</h2>
        <form>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-600" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link> 
        </p>
      </div>
    </div>
  );
};

export default Login;
