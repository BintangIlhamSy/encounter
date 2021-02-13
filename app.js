const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/Path');
const adminData = require('./routes/Admin');
const shopRouter = require('./routes/Shop');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
app.listen(3001);
