export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 ${className}`}>
      {children}
    </div>
  );
}
