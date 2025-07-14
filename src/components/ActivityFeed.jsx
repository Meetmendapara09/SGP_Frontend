export default function ActivityFeed({ activities = [] }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-lg">
      <h2 className="text-lg font-bold text-blue-900 mb-4">Activity Feed</h2>
      <ul className="flex flex-col gap-3">
        {activities.length === 0 ? (
          <li className="text-gray-400">No recent activity.</li>
        ) : (
          activities.map((activity, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="font-bold text-blue-600">{activity.user}</span>
              <span>{activity.action}</span>
              <span className="text-xs text-gray-400 ml-auto">{activity.time}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
