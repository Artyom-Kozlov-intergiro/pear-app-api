const createProviderService = require('src/modules/users/service');

function createProviderModule() {
    const service = createProviderService();

    return {
        service,
    }
}

module.exports = createProviderModule;
