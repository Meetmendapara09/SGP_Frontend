export default function Footer() {
  return (
    <footer className="px-6 py-3 bg-white border-t border-blue-100 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} SyncroSpace. All rights reserved.
    </footer>
  );
}
