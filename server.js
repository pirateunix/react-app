const serve = require('koa-static');
const Koa = require('koa');
const index = require("./routers/index");
const views = require('koa-views');
const api = require('./routers/api');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx, next) => {
	try {
		await next();
} catch (err) {
	ctx.status = err.status || 500;
	ctx.body = err.message;
	ctx.app.emit('error', err, ctx);
}
});
app.use(bodyParser());
app.use(views(__dirname + '/static', {map: {html: 'nunjucks'}}));
app.use(serve('./src/public/assets'));
index(app);
api(app);

app.listen(3000);