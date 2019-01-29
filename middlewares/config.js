const winston = require('winston');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(
    require('morgan')('combined', {
      stream: winston.stream
    })
  );
};
