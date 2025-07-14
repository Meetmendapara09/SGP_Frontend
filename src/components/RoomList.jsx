export default function RoomList({ rooms = [], onJoin }) {
  return (
    <div className="flex flex-col gap-4">
      {rooms.length === 0 ? (
        <div className="text-gray-500">No rooms available.</div>
      ) : (
        rooms.map(room => (
          <div key={room.id} className="bg-blue-50 rounded-xl p-4 flex justify-between items-center shadow">
            <div>
              <div className="font-bold text-blue-900">{room.name}</div>
              <div className="text-sm text-gray-600">Passcode: {room.passcode}</div>
            </div>
            <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-300 transition-all" onClick={() => onJoin(room)}>Join</button>
          </div>
        ))
      )}
    </div>
  );
}
