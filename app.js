const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/Admin');
const userRouter = require('./routes/User');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin', adminRouter);
app.use(userRouter);
app.use((req, res, next) => {
  res
    .status(404)
    .send(
      '<h1 style="text-align:center;color:red">Opsss....Page Not Found</h1>'
    );
});
app.listen(3001);
