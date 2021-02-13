const express = require('express');

const router = express.Router();

const adminData = require('./Admin');

router.get('/products', (req, res, next) => {
  const products = adminData.product;
  res.render('products', {
    docTitle: 'Our Products',
    prods: products,
  });
});

router.get('/', (req, res, next) => {
  res.render('shop', {
    docTitle: 'BolShop',
  });
});

module.exports = router;
