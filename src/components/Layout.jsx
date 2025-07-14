import useAppStore from "../store/useAppStore";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Toast from './Toast';

export default function Layout({ user, rooms = [], onRoomSelect, children, title, toast }) {
  const globalUser = useAppStore((s) => s.user);
  const globalNotifications = useAppStore((s) => s.notifications);
  return (
    <div className="flex flex-col h-screen bg-blue-50">
      <Header title={title || "SyncroSpace"} user={user || globalUser} />
      <div className="flex flex-1">
        <Sidebar user={user || globalUser} rooms={rooms} onRoomSelect={onRoomSelect} />
        <main className="flex-1 p-6 overflow-y-auto relative">
          {children}
          {(toast || (globalNotifications && globalNotifications.length > 0)) && (
            <Toast
              message={toast?.message || globalNotifications[0]?.message}
              type={toast?.type || globalNotifications[0]?.type || "info"}
              duration={toast?.duration || 3000}
              onClose={toast?.onClose}
            />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
