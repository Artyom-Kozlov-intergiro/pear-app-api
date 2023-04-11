const createUsersService = require('src/modules/users/service');

function createUserModule() {
    const service = createUsersService();

    return {
        service,
    }
}

module.exports = createUserModule;
