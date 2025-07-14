import { useEffect } from "react";

export default function Toast({ message, type = "info", duration = 3000, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const color = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold ${color}`}>
      {message}
    </div>
  );
}
