const express = require('express');

const path = require('path');

const rootDir = require('../utils/Path');

const router = express.Router();

router.get('/products', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'products.html'));
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
