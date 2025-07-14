import { Link } from "react-router-dom";

export default function Sidebar({ user, rooms = [], onRoomSelect }) {
  return (
    <aside className="h-full w-64 bg-white shadow-lg flex flex-col p-4 gap-6 border-r border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl">
          {user?.name ? user.name[0] : "U"}
        </div>
        <div>
          <div className="font-semibold text-blue-900">{user?.name || "Guest"}</div>
          <div className="text-xs text-gray-500">{user?.role || "Member"}</div>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard" className="text-blue-700 hover:underline">Dashboard</Link>
        <Link to="/room" className="text-blue-700 hover:underline">Rooms</Link>
        <Link to="/office" className="text-blue-700 hover:underline">Office</Link>
      </nav>
      <div className="mt-8">
        <div className="font-bold text-gray-700 mb-2">Rooms</div>
        <div className="flex flex-col gap-2">
          {rooms.length === 0 ? (
            <div className="text-gray-400">No rooms available.</div>
          ) : (
            rooms.map((room, idx) => (
              <button
                key={room.id || idx}
                className="text-left px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium"
                onClick={() => onRoomSelect && onRoomSelect(room)}
              >
                {room.name}
              </button>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}
