export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-b-4 border-blue-200 mb-4" aria-label="Loading"></div>
      <span className="text-blue-700 font-semibold">{text}</span>
    </div>
  );
}
