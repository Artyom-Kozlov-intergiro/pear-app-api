const express = require('express');
const bodyParser = require('body-parser');

const parseQueryString = require('src/utils/querystring.parser');

// const createPublicRouter = require('./public.router');
const createPrivateRouter = require('./private.router');

function createServerApis({ modules, config, logger }) {
    // const publicRouter = createPublicRouter({ modules });
    // const publicApi = setupApplication(publicRouter);

    const privateRouter = createPrivateRouter({ modules });
    const privateApi = setupApplication(privateRouter, []);

    return {
        privateApi,
        // publicApi,
    };
}

function setupApplication(router, middlewares = [], options = {}) {
    const app = express();

    setupMiddlewares(app, options);
    setupRouter(app, router);

    return app;
}

function setupMiddlewares(app, options) {
    app.set('query parser', parseQueryString);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.disable('x-powered-by');
}

function setupRouter(app, router) {
    // uncommit after auth middleware adding
    // app.use(router);
}

module.exports = createServerApis;
