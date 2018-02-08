var koa = require('koa');
var fs = require('fs');
var app = new koa();


var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
  if (ctx.path === "/json") {
    ctx.body = {
      foo: "bar"
    }
  }

  if (ctx.path === "/stream") {
    ctx.body = await fs.createReadStream(process.argv[3]);
  }

  await next();
});

app.listen(port);
