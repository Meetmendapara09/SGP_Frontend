import { useEffect } from "react";

export default function Notification({ message, type = "info", open, onClose, duration = 3000 }) {
  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open || !message) return null;

  const colors = {
    info: "bg-blue-100 text-blue-900 border-blue-300",
    success: "bg-green-100 text-green-900 border-green-300",
    error: "bg-red-100 text-red-900 border-red-300",
    warning: "bg-yellow-100 text-yellow-900 border-yellow-300"
  };

  return (
    <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg border ${colors[type]} animate-fade-in`}
      role="alert">
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button className="ml-4 text-lg font-bold text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}
