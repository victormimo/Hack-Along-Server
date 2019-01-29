const express = require('express');
const app = express();
require('./config/logging');
require('./middlewares/config')(app);

const keys = require('./config/keys');

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

const createListingRouter = require('./routes/createListing');

app.use('/api/create-listing', createListingRouter);

app.listen(keys.port);
keystone.start();
