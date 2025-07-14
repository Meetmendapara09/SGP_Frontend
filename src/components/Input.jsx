export default function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-blue-900 ${className}`}
      {...props}
    />
  );
}
