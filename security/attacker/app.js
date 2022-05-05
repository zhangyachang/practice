const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
// const server = require("http").createServer(app.callback());
const path = require('path');
const port = 4000;

const app = new Koa();

// const config = require('./config/config');
// const api = require('./routes/api');

// 代码执行顺序

app.use(async (ctx, next) => {
  // 加上去了 解决 cors 跨域问题
  // ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With,aaa,ze_tk');
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  // ctx.set("Access-Control-Max-Age", 1728000); // 阻止非预检请求 20天
  // ctx.set("Access-Control-Expose-Headers", "Authorization"); // 如果想要浏览器响应其他内容 需要加上
  // ctx.set('Access-Control-Expose-Headers', 'zaa'); // 如果想要浏览器响应其他内容 需要加上
  if (ctx.method == 'OPTIONS') ctx.status = 200;
  else await next();
});

app.use(logger());


app.use(async (ctx, next) => {
  console.log('代码进入', ctx);
  await next();
  console.log('代码回来了');
});
``
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   console.log("ctx", ctx);
// });

app.use(
  koaBody({
    parsedMethods: ['POST', 'PUT', 'DELETE'],
  })
); // 将 post 请求的 body 数据挂载到 ctx.request.body 上面

app.use(koaStatic(path.join(__dirname, 'public')));
console.log('路径', path.join(__dirname, 'public'));

// app.use(api.routes()).use(api.allowedMethods());

const server = http.createServer(app.callback());

// const socketIo = require('socket.io');
// const io = socketIo(server, { cors: true });
server.listen(`${port}`, () => {
  console.log(`${port}端口监听成功---`);
});
