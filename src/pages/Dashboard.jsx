import useAppStore from "../store/useAppStore";
export default function Dashboard() {
  const user = useAppStore((s) => s.user);
  const notifications = useAppStore((s) => s.notifications);
  const setNotifications = useAppStore((s) => s.setNotifications);

  function handleClear() {
    setNotifications([]);
  }
  function handleUpload(file) {
    // Implement file upload logic
    alert(`File '${file.name}' uploaded!`);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      <Layout title="Dashboard" user={user}>
        <div className="flex flex-col gap-8">
          <NotificationPanel notifications={notifications} onClear={handleClear} />
          <FileUploader onUpload={handleUpload} />
        </div>
      </Layout>
    </div>
  );
}