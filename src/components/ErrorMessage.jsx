export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-2">
      {message}
    </div>
  );
}
