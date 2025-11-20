import { useAuth } from "../../context/AuthContext";

export default function LogoutButton() {
  const { logout, user } = useAuth();

  if (!user) return null;

  return (
    <button onClick={logout} className="px-3 py-1 bg-orange-500 text-white rounded">
      Logout
    </button>
  );
}
