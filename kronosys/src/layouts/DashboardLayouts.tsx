import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/slices/authSlice";
import BackgroundLogo from "../assets/KronosisLogo.png";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detect "lg" breakpoint (Tailwind lg = 1024px)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  // Get role-specific dashboard path
  const getDashboardPath = () => {
    if (!user) return "/dashboard";
    return `/dashboard/${user.role.name}`;
  };

  // Get role-specific title
  const getRoleTitle = () => {
    if (!user) return "Dashboard";
    const roleName = user.role.name.charAt(0).toUpperCase() + user.role.name.slice(1);
    return `${roleName} Dashboard`;
  };

  // Define role-specific menu items
  const getMenuItems = () => {
    const dashboardPath = getDashboardPath();
    
    // Base menu items for all roles
    const baseItems = [
      { icon: LayoutDashboard, label: "Dashboard", path: dashboardPath },
      { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ];

    // You can add role-specific items here in the future
    // Example:
    // if (user?.role.name === "admin") {
    //   return [...baseItems, { icon: Users, label: "Manage Users", path: "/dashboard/users" }];
    // }

    return baseItems;
  };

  const menuItems = getMenuItems();

  // Compute sidebar x: 0 on desktop, else depend on sidebarOpen (offscreen = -280)
  const sidebarX = isDesktop ? 0 : sidebarOpen ? 0 : -280;

  // Check if current user is ticketer
  const isTicketer = user?.role.name === "ticketer";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Backdrop: only when sidebarOpen AND NOT desktop */}
      <AnimatePresence>
        {sidebarOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: isDesktop ? 0 : -280 }}
        animate={{ x: sidebarX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-50 transition-transform"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <img src={BackgroundLogo} alt="Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">Kronotrack</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                {user?.fullName?.charAt(0) || "U"}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{user?.fullName}</p>
                <p className="text-sm text-gray-600 capitalize">{user?.role.name}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => {
                        navigate(item.path);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                        isActive
                          ? "bg-purple-50 text-purple-600 font-semibold"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content: add left margin on lg to account for sidebar width */}
      <div className="lg:ml-[260px]">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-600 hover:text-gray-900 flex-shrink-0"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                {getRoleTitle()}
              </h1>
            </div>

            {/* Role-specific action buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {isTicketer && (
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("openCreateTicketModal"));
                  }}
                  className="flex items-center gap-2 bg-purple-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline sm:inline">Create Ticket</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;