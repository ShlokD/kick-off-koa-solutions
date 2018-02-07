var koa = require('koa');
var parse = require('co-body');
var app = new koa();


var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
 var body = await(parse(ctx));
 ctx.body = body.name.toUpperCase();
 await next();
});

app.listen(port);
