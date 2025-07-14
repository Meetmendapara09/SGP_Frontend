import Layout from "../components/Layout";
import KanbanBoard from "../components/KanbanBoard";
import SearchBar from "../components/SearchBar";
import Divider from "../components/Divider";
import SuccessMessage from "../components/SuccessMessage";

import { useState } from "react";

export default function Tasks() {
  const [query, setQuery] = useState("");
  const [success, setSuccess] = useState("");
  const tasks = [
    { id: 1, title: "Design UI", status: "todo", dueDate: "2025-07-20" },
    { id: 2, title: "Setup backend", status: "inprogress", dueDate: "2025-07-22" },
    { id: 3, title: "Deploy MVP", status: "done", dueDate: "2025-07-30" }
  ];
  const filtered = tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
  function handleTaskMove(id, toStatus) {
    setSuccess(`Task #${id} moved to ${toStatus}`);
    setTimeout(() => setSuccess(""), 2000);
  }
  return (
    <Layout title="Tasks">
      <SearchBar onSearch={setQuery} />
      <Divider />
      {success && <SuccessMessage message={success} />}
      <KanbanBoard tasks={filtered} onTaskMove={handleTaskMove} />
    </Layout>
  );
}
