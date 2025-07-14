export default function PresenceIndicator({ status = "offline" }) {
  const color = status === "online" ? "bg-green-400" : status === "away" ? "bg-yellow-400" : "bg-gray-400";
  const text = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-xs text-gray-600">{text}</span>
    </div>
  );
}
