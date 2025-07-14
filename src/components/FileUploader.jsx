export default function FileUploader({ onUpload }) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (file && onUpload) onUpload(file);
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 w-80 flex flex-col gap-3 items-center">
      <label className="font-bold text-blue-900 mb-2">Upload File</label>
      <input type="file" onChange={handleChange} className="block w-full text-sm text-gray-700" />
    </div>
  );
}
