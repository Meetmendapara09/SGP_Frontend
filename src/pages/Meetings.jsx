import Layout from "../components/Layout";
import MeetingScheduler from "../components/MeetingScheduler";
import Divider from "../components/Divider";
import SuccessMessage from "../components/SuccessMessage";

import { useState } from "react";

export default function Meetings() {
  const [success, setSuccess] = useState("");
  function handleSchedule(meeting) {
    setSuccess(`Meeting '${meeting.title}' scheduled!`);
    setTimeout(() => setSuccess(""), 2000);
  }
  return (
    <Layout title="Meetings">
      <Divider />
      {success && <SuccessMessage message={success} />}
      <MeetingScheduler onSchedule={handleSchedule} />
    </Layout>
  );
}
