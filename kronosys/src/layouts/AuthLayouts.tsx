import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const AuthLayout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;