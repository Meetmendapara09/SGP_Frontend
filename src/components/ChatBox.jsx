import { useState } from "react";
import MessageList from "./MessageList";

export default function ChatBox({ messages = [], onSend }) {
  const [input, setInput] = useState("");
  function handleSend(e) {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  }
  return (
    <div className="flex flex-col h-full w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-2xl p-4">
      <MessageList messages={messages} />
      <form className="flex gap-2 mt-4" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-blue-900"
        />
        <button type="submit" className="bg-blue-200 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-300 transition-all">Send</button>
      </form>
    </div>
  );
}
