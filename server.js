require('./init/paths').init();

const { addPath } = require('app-module-path');

const logger = require('src/logger');
const config = require('src/config');
const { dbInit } = require('src/db');
const initModules = require('src/modules');
const { successfulStartLog } = require('src/logger/templates');
const createServerApis = require('src/modules/api');

const db = dbInit({ config });

addPath(__dirname + '/src');

startServer();

async function startServer() {
    const modules = await initModules({
        db,
        config,
        logger,
    });
    const {
        privateApi,
        // publicApi,
    } = createServerApis({
        config,
        logger,
        modules,
    })

    listenPort(privateApi, config.privatePort);
    // listenPort(publicApi, config.publicPort);

    successfulStartLog();
}

function listenPort(app, port) {
    return app.listen(port);
}
