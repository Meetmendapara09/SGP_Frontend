import { useState } from "react";
import ChatBox from "../components/ChatBox";
import UserList from "../components/UserList";

export default function Room() {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Welcome to the room!", isOwn: false },
    { user: "You", text: "Hi everyone!", isOwn: true }
  ]);

  function handleSend(msg) {
    setMessages([...messages, { user: "You", text: msg, isOwn: true }]);
  }

  // Placeholder users
  const users = [
    { name: "Alice", status: "online" },
    { name: "Bob", status: "away" },
    { name: "Carol", status: "online" }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="md:w-1/4 bg-white bg-opacity-80 rounded-2xl shadow-2xl p-6 m-4">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Users</h3>
        <UserList users={users} />
      </div>
      <div className="md:w-3/4 flex flex-col items-center justify-center p-4">
        <ChatBox messages={messages} onSend={handleSend} />
      </div>
    </div>
  );
}
