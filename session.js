var koa = require('koa');
var session = require('koa-session');

var app = new koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(async function (ctx, next){
  const count = ctx.session.views + 1|| 1;
  ctx.session.views = count;
  ctx.body = count + ' views';
  await next();
});

app.listen(process.argv[2]);