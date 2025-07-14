import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute rounded-full bg-blue-300 opacity-30 w-96 h-96 -top-32 -left-32 blur-2xl animate-pulse" />
        <div className="absolute rounded-full bg-purple-300 opacity-30 w-96 h-96 -bottom-32 -right-32 blur-2xl animate-pulse" />
      </div>
      <main className="z-10 flex flex-col items-center justify-center">
        {/* Hero SVG illustration */}
        <div className="mb-8">
          <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="90" cy="100" rx="80" ry="15" fill="#c4b5fd" />
            <rect x="40" y="30" width="100" height="50" rx="12" fill="#a5b4fc" />
            <rect x="60" y="45" width="60" height="20" rx="6" fill="#818cf8" />
            <circle cx="60" cy="55" r="8" fill="#f472b6" />
            <circle cx="120" cy="55" r="8" fill="#34d399" />
            <rect x="80" y="60" width="20" height="10" rx="3" fill="#fbbf24" />
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold mb-6 text-blue-900 drop-shadow-lg">SyncroSpace</h1>
        <p className="mb-8 text-xl text-gray-700 max-w-2xl text-center font-medium">Unified collaborative platform for remote teams. Chat, meet, collaborate, and play in a virtual office space.</p>
        <div className="flex gap-4 mb-10">
          <Link to="/login" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition">Login</Link>
          <Link to="/signup" className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition">Sign Up</Link>
          <Link to="/office" className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition">Enter Office</Link>
        </div>
        {/* Features Section */}
        <section className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 max-w-3xl w-full mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
            <li>🔑 Secure Authentication (JWT, OAuth)</li>
            <li>💬 Real-time Team Chat</li>
            <li>📞 Video & Audio Meetings (WebRTC)</li>
            <li>🗂️ Kanban Task Board</li>
            <li>📝 Collaborative Whiteboard</li>
            <li>🏢 2D Virtual Office Playground</li>
            <li>📊 Dashboard & Analytics</li>
            <li>🛡️ Admin Panel</li>
          </ul>
        </section>
        {/* Project Info Section */}
        <section className="max-w-2xl w-full text-center text-gray-700 mb-4">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">About SyncroSpace</h3>
          <p className="mb-2">SyncroSpace is designed to unify communication, collaboration, and productivity for remote teams. Built with ReactJS, Vite, Tailwind CSS, and PhaserJS, it offers a seamless experience for chat, meetings, project management, and virtual office interaction.</p>
          <p className="mb-2">Technologies: ReactJS, Vite, Tailwind CSS, ShadCN UI, Zustand, TanStack Query, Formik, Framer Motion, PhaserJS, Socket.io-client.</p>
          <p className="mb-2">Backend: Java Spring Boot, PostgreSQL, MongoDB, Redis, WebSocket, JWT, Spring Security.</p>
          <p className="mb-2">See <span className="font-mono bg-gray-200 px-2 py-1 rounded">instruction.md</span> for full requirements and roadmap.</p>
        </section>
      </main>
    </div>
  );
}
