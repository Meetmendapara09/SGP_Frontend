import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend(e) {
    e.preventDefault();
    if (message.trim() && onSend) {
      onSend(message);
      setMessage("");
    }
  }

  return (
    <form onSubmit={handleSend} className="flex gap-2 items-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded px-3 py-2"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded font-bold">Send</button>
    </form>
  );
}
