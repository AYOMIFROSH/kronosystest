import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

interface PrivateRouteProps {
  children: ReactNode;
  allowedRoles?: Array<"admin" | "ticketer" | "commercial" | "private">;
}

const PrivateRoute = ({ children, allowedRoles }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role.name)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;