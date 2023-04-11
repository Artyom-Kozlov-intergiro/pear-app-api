const { Router } = require('express');

function createPrivateRouter() {
    const router = new Router();

    // router.use(authMiddleware);

    router.use('/', useRouter('login'));

    return {
        router,
    }
}

const useRouter = routerName => require(`src/modules/${routerName}/router`);

module.exports = createPrivateRouter;
