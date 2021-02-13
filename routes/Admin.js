const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../utils/Path');

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  this.product.push(req.body);
  res.redirect('/products');
});

exports.routes = router;
exports.product = products;
