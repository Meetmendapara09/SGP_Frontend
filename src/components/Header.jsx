export default function Header({ title, user }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-blue-100">
      <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-blue-700">{user?.name || "Guest"}</span>
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          {user?.name ? user.name[0] : "U"}
        </div>
      </div>
    </header>
  );
}
