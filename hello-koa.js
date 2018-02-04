var koa = require('koa');
var app = new koa();

var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
  ctx.body = "hello koa";
  await next();
});

app.listen(port);
