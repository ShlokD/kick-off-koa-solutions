var koa = require('koa');
var app = new koa();
app.keys = ['secret', 'keys'];

var port = process.argv[2] || 5000;


app.use(async function (ctx, next) {
  if (ctx.path === '/') {
    var count = ctx.cookies.get('view', { signed: true}) || 1;
    ctx.cookies.set('view', count + 1, { signed: true});
    ctx.body = count+' views';
  }
});

app.listen(port);
