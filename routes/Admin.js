const express = require('express');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
  res.send(
    '<html>' +
      '<head><title>Add user</title></head>' +
      '<body><h1 style="text-align:center;">Add New User</h1><br />' +
      '<div style="text-align:center;">' +
      '<br /><form action="/admin/add-user" method="POST">' +
      '<label for="username">Username:</label><br>' +
      '<input type="text" id="username" name="username" placeholder="Please insert username"><br>' +
      '<input type="submit" value="Submit">' +
      '</form></div></body>' +
      '</html>'
  );
  next();
});

router.post('/add-user', (req, res, next) => {
  console.log(req.body);
  res.redirect('/users');
});
module.exports = router;
