const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/Path');
const adminRouter = require('./routes/Admin');
const shopRouter = require('./routes/Shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(3001);
