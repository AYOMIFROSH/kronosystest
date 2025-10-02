import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import PrivateRoute from "./components/PrivateRoutes";
import AuthLayout from "./layouts/AuthLayouts";
import DashboardLayout from "./layouts/DashboardLayouts";
import AuthPage from "./authentication/AuthPage";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import TicketerDashboard from "./pages/dashboard/TicketerDashboard";
import CommercialDashboard from "./pages/dashboard/CommercialDashboard";
import PrivateDashboard from "./pages/dashboard/PrivateDashboard";
import Unauthorized from "./pages/Unauthorized";

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<AuthPage />} />
            </Route>

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              <Route
                path="admin"
                element={
                  <PrivateRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="ticketer"
                element={
                  <PrivateRoute allowedRoles={["ticketer"]}>
                    <TicketerDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="commercial"
                element={
                  <PrivateRoute allowedRoles={["commercial"]}>
                    <CommercialDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="private"
                element={
                  <PrivateRoute allowedRoles={["private"]}>
                    <PrivateDashboard />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* Unauthorized Page */}
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Default Redirects */}
            <Route path="/" element={<Navigate to="/auth/login" replace />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}