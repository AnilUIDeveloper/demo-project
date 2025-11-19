// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth_context";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
