const winston = require('winston');
require('express-async-errors');

exports.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'logs/scoreboard-node-backend.log' })
    ],
    exceptionHandlers: [
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'logs/uncaught-exceptions.log' })
    ]
});

process.on('unhandledRejection', (err) => {
    throw err;
});
