const express = require('express');
const app = express();

const keys = require('./config/keys');
const logger = require('./config/logging');
require('./routes/middlewares/config')(app, logger);

const keystone = require('keystone');
keystone.import('models');

keystone.init({
  name: 'hack-along-keystone',
  'auto update': true,
  'cookie secret': keys.keystoneSecret,
  port: keys.keystonePort,
  auth: true,
  'user model': 'User',
  mongo: keys.mongoURI
});

app.get('/api/hello', (req, res) => {
  res.status(200);
  res.send('hello world');
});

require('./routes/controllers/newListingRoute')(app);

app.listen(keys.port);
keystone.start();
