const bodyParser = require('body-parser');

module.exports = (app, logger) => {
  app.use(require('morgan')('combined', { stream: logger.stream }));
  app.use(bodyParser.json());
};
