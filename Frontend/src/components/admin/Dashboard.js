// frontend/src/components/Admin/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalUsers: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    const fetchRecentOrders = async () => {
      try {
        const response = await axios.get('/api/admin/orders/recent', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRecentOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchStats();
    fetchRecentOrders();
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Orders</h3>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-bold">${stats.totalRevenue}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Products</h3>
          <p className="text-2xl font-bold">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Order ID</th>
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <tr key={order._id} className="border-b">
                <td className="py-2">{order._id}</td>
                <td className="py-2">{order.user.name}</td>
                <td className="py-2">${order.total}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
