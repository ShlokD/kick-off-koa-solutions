var koa = require('koa');
var app = new koa();
var views = require('co-views');

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

var port = process.argv[2] || 5000;

app.use(async function (ctx, next) {
  var user = {
    name: {
      first: 'Tobi',
      last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
  };
  
  ctx.body = await render('user', { user })
  await next();
});

app.listen(port);