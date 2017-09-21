const router = require('koa-router')();
const queries = require('../src/models/crud');
const Joi = require('joi');

const schema = {
	name: Joi.string().optional(),
	description: Joi.string().optional(),
	id: Joi.number().optional(),
	firstName: Joi.string().optional(),
	lastName: Joi.string().optional(),
	departmentId: Joi.number().optional()
};

module.exports = function (app) {
	router
		.use('/api', async function (ctx, next) {
		await new Promise((resolve, reject) =>
		Joi.validate(ctx.request.body, schema, function (err, value) {
			if (err) {
				reject(err)
			} else {
				resolve(value)
			}
		})
	);
		await next();
	})
	.get('/api/departments', async function (ctx, next) {
		ctx.body = await queries.getDepartment();
		await next();
	})
	.post('/api/departments/add', async function (ctx, next) {
		ctx.body = await queries.addToDepartment(ctx.request.body);
		await next();
	})
	.post('/api/departments/update', async function (ctx, next) {
		ctx.body = await queries.updateDepartment(ctx.request.body);
		await next();
	})
	.post('/api/departments/delete', async function (ctx, next) {
		ctx.body = await queries.removeFromDepartment(ctx.request.body);
		await next();
	})
	.get('/api/employee', async function (ctx, next) {
		ctx.body = await queries.getEmployee();
		await next();
	})
	.post('/api/employee/add', async function (ctx, next) {
		ctx.body = await queries.addToEmployee(ctx.request.body);
		await next();
	})
	.post('/api/employee/update', async function (ctx, next) {
		ctx.body = await queries.updateEmployee(ctx.request.body);
		await next();
	})
	.post('/api/employee/delete', async function (ctx, next) {
		ctx.body = await queries.removeFromEmployee(ctx.request.body);
		await next();
	});

	app.use(router.routes());
};