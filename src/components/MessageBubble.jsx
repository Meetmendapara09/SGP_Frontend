export default function MessageBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${isOwn ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-900"}`}>
        {message}
      </div>
    </div>
  );
}
