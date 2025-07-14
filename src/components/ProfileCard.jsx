export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-3 w-64">
      <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center text-white text-3xl font-bold mb-2">
        {user?.name ? user.name[0] : "U"}
      </div>
      <div className="font-semibold text-blue-900 text-lg">{user?.name || "Guest"}</div>
      <div className="text-xs text-gray-500">{user?.role || "Member"}</div>
      <div className="mt-2 text-sm text-gray-700">{user?.email || "No email provided"}</div>
    </div>
  );
}
