export default function MessageList({ messages = [] }) {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto h-64">
      {messages.length === 0 ? (
        <div className="text-gray-400 text-center mt-8">No messages yet.</div>
      ) : (
        messages.map((msg, idx) => (
          <div key={idx} className={`px-4 py-2 rounded-xl shadow text-base ${msg.isOwn ? "bg-blue-100 text-blue-900 self-end" : "bg-gray-100 text-gray-800 self-start"}`}>
            <span className="font-semibold mr-2">{msg.user}</span>
            <span>{msg.text}</span>
          </div>
        ))
      )}
    </div>
  );
}
