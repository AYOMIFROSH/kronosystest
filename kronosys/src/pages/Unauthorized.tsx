import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
          <ShieldAlert className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;