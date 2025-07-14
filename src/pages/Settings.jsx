import Layout from "../components/Layout";
import SettingsPanel from "../components/SettingsPanel";

export default function Settings() {
  const settings = { DarkMode: false, Notifications: true };
  function handleChange(key, value) {
    // Implement settings change logic
  }
  return (
    <Layout>
      <SettingsPanel settings={settings} onChange={handleChange} />
    </Layout>
  );
}
