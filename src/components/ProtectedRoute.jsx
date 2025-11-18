import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/useAuth";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
