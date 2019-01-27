var winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }),
    new winston.transports.File({
      filename: './logs/logfile.log',
      level: 'warn',
      handleExceptions: true,
      json: true,
      colorize: false,
      maxsize: 5242880, //5MB
      maxFiles: 5
    })
  ],
  exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
};

module.exports = logger;
