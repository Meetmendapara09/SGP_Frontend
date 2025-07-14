import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PhaserGame from "./components/PhaserGame";
import OfficePlayground from "./scenes/OfficePlayground";
import Dashboard from "./pages/Dashboard";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Activity from "./pages/Activity";
import Tasks from "./pages/Tasks";
import Meetings from "./pages/Meetings";
import WhiteboardPage from "./pages/Whiteboard";
import Survey from "./pages/Survey";

const phaserConfig = (selectedChar = 0, userCount = 4) => ({
  type: window.Phaser ? window.Phaser.AUTO : 2,
  width: 800,
  height: 600,
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
    arcade: { debug: false }
  },
  scene: new OfficePlayground(selectedChar, userCount)
});

function App() {
  const [selectedChar, setSelectedChar] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/office" element={
          <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <PhaserGame config={phaserConfig(0, 4)} />
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/whiteboard" element={<WhiteboardPage />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  )
}

export default App
