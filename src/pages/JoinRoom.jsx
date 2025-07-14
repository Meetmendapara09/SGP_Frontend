import { useState } from "react";
import Layout from "../components/Layout";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";

  export default function JoinRoom() {
    const [passcode, setPasscode] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!passcode.match(/^[A-Za-z0-9]{12}$/)) {
        setError("Passcode must be 12 alphanumeric characters.");
        setSuccess("");
        return;
      }
      setSuccess("Joined room successfully!");
      setError("");
      setPasscode("");
      setTimeout(() => setSuccess(""), 2000);
    }
  
    return (
    <Layout title="Join Room">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Join a Room</h2>
          {success && <SuccessMessage message={success} />}
          {error && <ErrorMessage message={error} />}
          <form className="flex flex-col gap-4 w-full max-w-xs" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter 12-digit Passcode" value={passcode} maxLength={12} pattern="[A-Za-z0-9]{12}" onChange={e => setPasscode(e.target.value)} className="px-4 py-2 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 bg-green-50 text-green-900" />
            <button type="submit" className="bg-green-200 text-green-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-300 hover:scale-105 transition-all">Join Room</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
