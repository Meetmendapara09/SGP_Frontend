import { useState } from "react";

export default function TabBar({ tabs = [], initial = 0, onTabChange }) {
  const [active, setActive] = useState(initial);

  function handleTab(idx) {
    setActive(idx);
    if (onTabChange) onTabChange(idx);
  }

  return (
    <div className="flex gap-2 border-b border-blue-200 mb-4">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none ${active === idx ? "bg-blue-100 text-blue-900 border-b-2 border-blue-500" : "text-blue-600"}`}
          onClick={() => handleTab(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
