export default function NotificationPanel({ notifications = [], onClear }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-blue-900">Notifications</h2>
        <button
          className="text-xs text-blue-600 hover:underline"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {notifications.length === 0 ? (
          <li className="text-gray-400">No notifications.</li>
        ) : (
          notifications.map((note, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="font-bold text-blue-600">{note.title}</span>
              <span>{note.message}</span>
              <span className="text-xs text-gray-400 ml-auto">{note.time}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
