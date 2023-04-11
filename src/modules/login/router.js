const { Router } = require('express');

function createRouter({
    loginController,
}) {
    const router = new Router();

    router.post('/', loginController.login);

    return {
        router,
    }
}

module.exports = createRouter;
