import koa from 'koa';
import router from 'koa-router';
import logger from 'koa-logger';
import route from 'koa-router';


var app = new koa();

// Init logger
app.use(logger());
app.use(route(app));

//routes
app.get('/', async ct => {
    ctx.body = 'Hello World';
})
app.get('/test', async ct => {
    ctx.body = 'Hello Test';
})

//spin up
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to %s', port);