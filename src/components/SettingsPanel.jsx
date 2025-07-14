export default function SettingsPanel({ settings, onChange }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-80 flex flex-col gap-4">
      <h2 className="text-lg font-bold text-blue-900 mb-2">Settings</h2>
      {Object.keys(settings || {}).map((key) => (
        <div key={key} className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">{key}</span>
          <input
            type="checkbox"
            checked={!!settings[key]}
            onChange={() => onChange(key, !settings[key])}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
      ))}
    </div>
  );
}
