var koa = require('koa');

var app = new koa();

app.use(errorHandler());

app.use(async function (ctx, next) {
  if (ctx.path === '/error') throw new Error('ooops');
  ctx.body = 'OK';
  await next();
});

function errorHandler() {
  return async function (ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.body = 'internal server error';
      ctx.status = 500;
    }
  };
}

app.listen(process.argv[2]);