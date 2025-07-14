export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-blue-700 mb-4">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          {item.link ? (
            <a href={item.link} className="hover:underline text-blue-900 font-semibold">{item.label}</a>
          ) : (
            <span className="text-blue-500">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="text-blue-300">/</span>}
        </span>
      ))}
    </nav>
  );
}
