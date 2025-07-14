import { useState } from "react";

const avatars = [
  "🧑", "👩", "👨", "🧔", "👩‍🦰", "👨‍🦱", "👩‍🦳", "👨‍🦲", "🧑‍🎤", "🧑‍💻"
];

export default function AvatarSelector({ selected, onSelect }) {
  const [active, setActive] = useState(selected || avatars[0]);

  function handleSelect(avatar) {
    setActive(avatar);
    if (onSelect) onSelect(avatar);
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {avatars.map((avatar, idx) => (
        <button
          key={idx}
          className={`text-3xl p-2 rounded-full border-2 ${active === avatar ? "border-blue-500 bg-blue-100" : "border-transparent"}`}
          onClick={() => handleSelect(avatar)}
        >
          {avatar}
        </button>
      ))}
    </div>
  );
}
