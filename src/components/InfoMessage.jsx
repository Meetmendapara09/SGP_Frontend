export default function InfoMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-lg mb-2">
      {message}
    </div>
  );
}
