import { useState } from "react";

export default function SearchBar({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 border-none outline-none text-blue-900 bg-transparent"
      />
      <span className="text-blue-400 text-xl">🔍</span>
    </div>
  );
}
