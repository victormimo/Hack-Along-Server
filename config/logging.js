var winston = require('winston');

const consoleTransport = new winston.transports.Console({
  level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
  handleExceptions: true,
  json: false,
  colorize: true
});

const fileTransport = new winston.transports.File({
  filename: './logs/logfile.log',
  level: 'info',
  handleExceptions: true,
  json: true,
  colorize: false,
  maxsize: 5242880, //5MB
  maxFiles: 5
});

winston.add(consoleTransport);
winston.add(fileTransport);

if (process.env.NODE_ENV !== 'production') {
  winston.debug('Logging initialized at debug level');
}

winston.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    winston.info(message);
  }
};
