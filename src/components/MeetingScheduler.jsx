import { useState } from "react";

export default function MeetingScheduler({ onSchedule }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [participants, setParticipants] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onSchedule) {
      onSchedule({ title, date, time, participants: participants.split(",") });
    }
    setTitle("");
    setDate("");
    setTime("");
    setParticipants("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 w-full max-w-md flex flex-col gap-4">
      <h2 className="text-lg font-bold text-blue-900 mb-2">Schedule Meeting</h2>
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />
      <input
        type="text"
        placeholder="Participants (comma separated)"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded font-bold">Schedule</button>
    </form>
  );
}
