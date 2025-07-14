export default function Avatar({ name, color = "#818cf8", size = 48 }) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-bold text-white shadow"
      style={{ backgroundColor: color, width: size, height: size, fontSize: size / 2 }}
    >
      {name ? name[0].toUpperCase() : "?"}
    </div>
  );
}
