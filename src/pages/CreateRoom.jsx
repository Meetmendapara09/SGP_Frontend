
export default function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const [passcode, setPasscode] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!roomName) {
      setError("Room name is required.");
      setSuccess("");
      return;
    }
    if (!passcode.match(/^[A-Za-z0-9]{12}$/)) {
      setError("Passcode must be 12 alphanumeric characters.");
      setSuccess("");
      return;
    }
    setSuccess(`Room '${roomName}' created!`);
    setError("");
    setRoomName("");
    setPasscode("");
    setTimeout(() => setSuccess(""), 2000);
  }

  return (
    <Layout title="Create Room">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Create a Room</h2>
          {success && <SuccessMessage message={success} />}
          {error && <ErrorMessage message={error} />}
          <form className="flex flex-col gap-4 w-full max-w-xs" onSubmit={handleSubmit}>
            <input type="text" placeholder="Room Name" value={roomName} onChange={e => setRoomName(e.target.value)} className="px-4 py-2 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-blue-900" />
            <input type="text" placeholder="12-digit Passcode (A-Z, a-z, 0-9)" value={passcode} maxLength={12} pattern="[A-Za-z0-9]{12}" onChange={e => setPasscode(e.target.value)} className="px-4 py-2 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-purple-50 text-purple-900" />
            <button type="submit" className="bg-blue-200 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-300 hover:scale-105 transition-all">Create Room</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
