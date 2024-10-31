// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

router.get('/stats', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalRevenue = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments({ role: 'user' });

    res.json({
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
      totalProducts,
      totalUsers
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/orders/recent', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('user', 'name');
    res.json(recentOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
