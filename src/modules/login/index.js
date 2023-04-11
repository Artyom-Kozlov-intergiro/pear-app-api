const createLoginService = require('./service');
const createLoginController = require('./controller');
const createLoginRouter = require('./router');

function createLoginModule() {
    const service = createLoginService();
    const controller = createLoginController();
    const router = createLoginRouter();

    return {
        service,
        controller,
        router,
    }
}

module.exports = createLoginModule;
