import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-black p-8 rounded-lg shadow-lg w-96 border border-white">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black text-white border-b border-white focus:border focus:border-white rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black text-white border-b border-white focus:border focus:border-white rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Login
          </button>
        </form>
        <p className="text-white text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
