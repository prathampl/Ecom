// backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/search', async (req, res) => {
  try {
    const { query, category, minPrice, maxPrice, sort } = req.query;
    
    let searchQuery = {};
    if (query) {
      searchQuery.$or = [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ];
    }
    
    if (category) {
      searchQuery.category = category;
    }
    
    if (minPrice || maxPrice) {
      searchQuery.price = {};
      if (minPrice) searchQuery.price.$gte = Number(minPrice);
      if (maxPrice) searchQuery.price.$lte = Number(maxPrice);
    }

    let sortOption = {};
    if (sort === 'price_asc') sortOption.price = 1;
    if (sort === 'price_desc') sortOption.price = -1;

    const products = await Product.find(searchQuery).sort(sortOption);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
