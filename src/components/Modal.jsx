
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {title && <h2 className="text-lg font-bold text-blue-900 mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
