export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold shadow transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-200 text-blue-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
