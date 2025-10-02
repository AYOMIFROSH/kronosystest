import { motion } from "framer-motion";
import { Car, Calendar, MapPin, Shield } from "lucide-react";

const PrivateDashboard = () => {
  const stats = [
    { icon: Car, label: "My Vehicles", value: "3", color: "bg-blue-500" },
    { icon: Calendar, label: "Recent Trips", value: "24", color: "bg-green-500" },
    { icon: MapPin, label: "Miles Traveled", value: "1,245", color: "bg-purple-500" },
    { icon: Shield, label: "Safety Score", value: "98%", color: "bg-orange-500" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Private Dashboard</h2>
        <p className="text-gray-600">Track your personal vehicle information</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrivateDashboard;