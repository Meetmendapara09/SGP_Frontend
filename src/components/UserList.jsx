export default function UserList({ users = [] }) {
  return (
    <div className="flex flex-col gap-3">
      {users.length === 0 ? (
        <div className="text-gray-400">No users online.</div>
      ) : (
        users.map((user, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 shadow">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${user.status === "online" ? "bg-green-400" : "bg-yellow-400"}`}>{user.name[0]}</div>
            <div className="flex flex-col">
              <span className="font-semibold text-blue-900">{user.name}</span>
              <span className={`text-xs ${user.status === "online" ? "text-green-600" : "text-yellow-600"}`}>{user.status}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
