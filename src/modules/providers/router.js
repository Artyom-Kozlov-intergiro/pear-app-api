const { Router } = require('express');

function createRouter({
    providerController,
}) {
    const router = new Router();

    router.post('/', providerController.createProvider);
    router.put('/', providerController.updateProvider);

    return {
        router,
    }
}

module.exports = createRouter;
