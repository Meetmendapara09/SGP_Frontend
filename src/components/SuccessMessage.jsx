export default function SuccessMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mb-2">
      {message}
    </div>
  );
}
