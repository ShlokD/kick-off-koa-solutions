var koa = require('koa');
var fs = require('fs');
var app = new koa();


var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
  if (ctx.request.is('application/json')) {
    ctx.body = {
      message: "hi!"
    }
    ctx.response.header.type = 'application/json';
  } else {
    ctx.body = "ok";
    ctx.response.header.type = 'text';
  }
  await next();
});

app.listen(port);
