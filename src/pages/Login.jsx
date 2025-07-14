import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // TODO: Replace with real authentication
    // On success:
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        {/* Icon */}
        <div className="mb-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="16" width="32" height="20" rx="6" fill="#818cf8" />
            <rect x="16" y="24" width="16" height="4" rx="2" fill="#a5b4fc" />
            <circle cx="24" cy="26" r="2" fill="#f472b6" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-blue-900">Login</h2>
        <p className="mb-6 text-gray-600 text-center">Welcome back! Please sign in to your SyncroSpace account.</p>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Login</button>
        </form>
        <p className="mt-6 text-gray-600">Don't have an account? <Link to="/signup" className="text-purple-600 font-semibold hover:underline">Sign up</Link></p>
      </div>
    </div>
  );
}
