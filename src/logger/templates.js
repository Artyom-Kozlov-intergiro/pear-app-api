const logger = require('./index');

module.exports = {
    successfulStartLog,
    successfulStopLog,
};

function successfulStartLog() {
    logger.log('Server started successfully.');
}

function successfulStopLog() {
    logger.log('Server stopped.');
}
