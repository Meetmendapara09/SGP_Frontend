import Layout from "../components/Layout";
import ActivityFeed from "../components/ActivityFeed";
import SearchBar from "../components/SearchBar";
import Divider from "../components/Divider";

import { useState } from "react";

export default function Activity() {
  const [query, setQuery] = useState("");
  const activities = [
    { user: "John", action: "created a task", time: "2m ago" },
    { user: "Jane", action: "joined room", time: "5m ago" }
  ];
  const filtered = activities.filter(a => a.user.toLowerCase().includes(query.toLowerCase()) || a.action.toLowerCase().includes(query.toLowerCase()));
  return (
    <Layout title="Activity">
      <SearchBar onSearch={setQuery} />
      <Divider />
      <ActivityFeed activities={filtered} />
    </Layout>
  );
}
