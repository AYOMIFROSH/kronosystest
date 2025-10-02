import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import BackgroundImage from "../assets/KronossysBackground.jpg";
import BackgroundLogo from "../assets/KronosisLogo.png";
import { useLoginMutation } from "../store/api/authApi";
import { useAppDispatch } from "../hooks/redux";
import { setCredentials } from "../store/slices/authSlice";
import { devLog } from "../utils/console";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const getRoleDashboard = (roleName: string): string => {
    const roleRoutes: Record<string, string> = {
      admin: "/dashboard/admin",
      ticketer: "/dashboard/ticketer",
      commercial: "/dashboard/commercial",
      private: "/dashboard/private",
    };
    return roleRoutes[roleName] || "/dashboard";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();

      devLog.log("Login successful:", response);

      dispatch(
        setCredentials({
          user: response.data.user,
          token: response.data.token,
        })
      );

      const dashboardRoute = getRoleDashboard(response.data.user.role.name);
      navigate(dashboardRoute, { replace: true });
    } catch (err: any) {
      devLog.error("Login error:", err);
      const errorMessage =
        err?.data?.message || "Invalid email or password. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 auth-gradient"></div>
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 animate-slideUp">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={BackgroundLogo} alt="Kronosis Logo" className="h-16 w-16" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign in to your account
          </p>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm shadow-md z-20"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5F0195] text-white py-3 rounded-lg font-semibold hover:bg-[#4a0174] transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Forgot Password Link */}
          {/* Forgot Password Link */}
          <div className="text-center mt-6"


          >
            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;