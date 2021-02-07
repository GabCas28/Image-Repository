
const { createLogger, format, transports } = require('winston');
const isEmptyObject = (obj: Object) => {
    return !Object.keys(obj).length;
}
const myFormat = (info: any) => {
    var timestamp = info.timestamp,
        level = info.level,
        message = info.message;
    delete info.timestamp;
    delete info.level;
    delete info.message;
    var rest = isEmptyObject(info) ? '' : JSON.stringify(info);
    return `[${timestamp}] [${level}]: ${message} ${rest}`;
}
// creates a new Winston Logger
const logger = new createLogger({
    format: format.combine(
        format.timestamp(),
        format.splat(),
        // format.simple(),
        // format.prettyPrint(),
        format.printf(myFormat)
    ),
    transports: [
        // new transports.File({
        //     level: 'info',
        //     filename: './logs/all-logs.log',
        //     handleExceptions: true,
        //     json: true,
        //     maxSize: 5242880, //5MB
        //     maxFiles: 5,
        //     colorize: false
        // }),
        new transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false,
})
logger.stream = {
    write: function (message: any, encoding: any) {
        logger.info(message);
    }
};
module.exports = logger;