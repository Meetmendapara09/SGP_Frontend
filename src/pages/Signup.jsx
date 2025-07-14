import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side: details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 to-blue-200">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-4">Join SyncroSpace</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">Create your account and unlock a unified workspace for remote teams. Collaborate, chat, manage tasks, and meet in a virtual office.</p>
          <ul className="text-gray-800 text-base mb-6 list-disc list-inside">
            <li>🔒 Secure authentication</li>
            <li>💬 Real-time team chat</li>
            <li>📞 Video meetings</li>
            <li>🗂️ Kanban task board</li>
            <li>🏢 2D virtual office</li>
          </ul>
          <p className="text-sm text-gray-500">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link></p>
        </div>
        {/* Right side: signup form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Sign Up</h3>
          <p className="mb-4 text-gray-600 text-center">Welcome! Fill in your details to get started.</p>
          <form className="flex flex-col gap-4 w-full max-w-xs">
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-purple-700 transition">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
