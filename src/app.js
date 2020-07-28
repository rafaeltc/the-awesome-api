const Koa = require('koa');
const Router = require('@koa/router');
var logger = require('koa-logger');

const app = new Koa();
const router = new Router();

// Init logger
app.use(logger());

router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.body = 'hello world!'
});

router.get('/home', (ctx, next) => {
    // ctx.router available
    ctx.body = 'HOME!'
});

app
    .use(router.routes())
    .use(router.allowedMethods());

//var _ = router(); //Instantiate the router

//_.get('/', async ctx => {
//ctx.body = 'Hello World';
//});
//_.get('/hello', async ctx => {
//ctx.body = 'Hello hello!';
//});
//app.use(_.routes()); //Use the routes defined using the router

//routes
//app.get('/', async ct => {
//ctx.body = 'Hello World';
//});

//app.get('/test', async ct => {
//ctx.body = 'Hello Test';
//});

//spin up
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to %s', port);