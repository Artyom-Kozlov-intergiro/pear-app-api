const createUserModule = require('./users')
const createProviderModule = require('./providers')

async function initModules({
    db,
    config,
    logger,
}) {
    const userModule = createUserModule({
        db,
        config,
        logger,});
    const providerModule = createProviderModule({
        db,
        config,
        logger,
    });

    return {
        userModule,
        providerModule,
    }
}

module.exports = initModules;
