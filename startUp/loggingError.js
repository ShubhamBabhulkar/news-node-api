const winston = require('winston');
const config = require('config');
require('express-async-errors');
require('winston-mongodb')
module.exports = function() {
    winston.add(new winston.transports.File({ filename: 'logs/generaLog.log' }));
    
    winston.add(new winston.transports.MongoDB({ db: 'mongodb://localhost/assignment-1', leve: 'info' }));
    
    winston.handleExceptions( new winston.transports.File({ filename: 'logs/HighlevelLog.log' }) );

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    if(!config.get('jwt.password')) {
        winston.error(new Error('JwtPrivateKey not defibe'));
        process.exit(1);
    }
}