const bodyParser = require('body-parser');

module.exports = (app, logger) => {
  app.use(bodyParser.json());
  app.use(
    require('morgan')('combined', {
      stream: logger.stream
    })
  );
};
