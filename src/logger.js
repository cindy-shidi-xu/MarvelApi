import winston from 'winston';

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'api.log' })
  ]
});

export default logger;
