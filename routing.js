var koa = require('koa');
var app = new koa();

var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
  if (ctx.path === '/') {
    ctx.body = "hello koa";
  }


  if (ctx.path === '/404') {
    ctx.body = "page not found";
  }

  if (ctx.path === '/500') {
    ctx.body = "internal server error";
  }
  await next();
});

app.listen(port);
