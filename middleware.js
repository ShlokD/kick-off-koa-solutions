var koa = require('koa');

var app = new koa();

app.use(responseTime());
app.use(upperCase());

app.use(async function (ctx) {
  ctx.body = 'hello koa';
});

function responseTime() {
  return async function (ctx, next) {
    const start = new Date();
    await next();
    // set X-Response-Time head
    ctx.set('X-Response-Time', new Date() - start);
  };
}

function upperCase() {
  return async function (ctx, next) {
    await next();
    ctx.body = ctx.body.toUpperCase();
  };
}

app.listen(process.argv[2]);