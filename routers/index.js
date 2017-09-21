const router = require('koa-router')();

module.exports = function (app) {
    router.all('/', async function (ctx, next) {
        ctx.state = { env: process.env.NODE_ENV}
        await ctx.render('index', {});
        next();
    });

    app.use(router.routes());
};