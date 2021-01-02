const path = require('path');

const root = require.main.filename;

module.exports = path.dirname(root);
