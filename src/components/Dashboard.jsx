import { Users, DollarSign, ShoppingCart, User } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const userData = [
  { name: "John Doe", email: "john@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane@example.com", role: "Customer" },
  { name: "Bob Lee", email: "bob@example.com", role: "Manager" },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6000 },
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Dashboard</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex items-center space-x-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <Users size={28} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Users</h2>
            <p className="text-3xl font-bold text-gray-900">120</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex items-center space-x-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-full">
            <DollarSign size={28} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-3xl font-bold text-gray-900">$10,000</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex items-center space-x-4">
          <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
            <ShoppingCart size={28} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Orders</h2>
            <p className="text-3xl font-bold text-gray-900">85</p>
          </div>
        </div>
      </div>

      {/* Chart and User Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Details */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">User Details</h2>
          <ul className="space-y-4">
            {userData.map((user, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <div className="p-3 bg-gray-100 text-gray-600 rounded-full">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                    {user.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
