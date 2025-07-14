import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import PresenceIndicator from "../components/PresenceIndicator";
import AvatarSelector from "../components/AvatarSelector";

import { useState } from "react";

export default function Profile() {
  const [avatar, setAvatar] = useState("🧑");
  const [status, setStatus] = useState("online");
  const user = { name: "John Doe", role: "Member", email: "john@example.com", avatar };
  return (
    <Layout user={user} title="Profile">
      <div className="flex flex-col items-center gap-6">
        <ProfileCard user={user} />
        <PresenceIndicator status={status} />
        <div className="flex gap-2 mt-2">
          {["online", "away", "offline"].map((s) => (
            <button key={s} className={`px-3 py-1 rounded ${status === s ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-900"}`} onClick={() => setStatus(s)}>{s}</button>
          ))}
        </div>
        <AvatarSelector selected={avatar} onSelect={setAvatar} />
      </div>
    </Layout>
  );
}
