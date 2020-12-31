const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.send(
    '<html>' +
      '<head><title>List Users</title></head>' +
      '<body><h1 style="text-align:center;">' +
      'List of users :</h1><br /><ul>' +
      '<li>Bintang Ilham Syahputra</li>' +
      '<li>Puti Hilma Syahrani</li></ul></body>' +
      '</html>'
  );
});

router.get('/', (req, res, next) => {
  res.send(
    '<html>' +
      '<head><title>Welcome</title></head>' +
      '<body><h1 style="text-align:center;color:red">Hi All !!</h1><br />' +
      '<h3 style="text-align:center;color:blue">My Name is Bintang</h3>' +
      '</body>' +
      '</html>'
  );
});

module.exports = router;
