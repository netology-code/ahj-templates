const http = require('http');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const uuid = require('uuid');
const app = new Koa();

// => Static file handling
// const public = path.join(__dirname, '/public')
// app.use(koaStatic(public));

// => CORS
// app.use(async (ctx, next) => {
//   const origin = ctx.request.get('Origin');
//   if (!origin) {
//     return await next();
//   }

//   const headers = { 'Access-Control-Allow-Origin': '*', };

//   if (ctx.request.method !== 'OPTIONS') {
//     ctx.response.set({...headers});
//     try {
//       return await next();
//     } catch (e) {
//       e.headers = {...e.headers, ...headers};
//       throw e;
//     }
//   }
  
//   if (ctx.request.get('Access-Control-Request-Method')) {
//     ctx.response.set({
//       ...headers,
//       'Access-Control-Allow-Methods': 'GET, POST, PUD, DELETE, PATCH',
//     });

//     if (ctx.request.get('Access-Control-Request-Headers')) {
//       ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Request-Headers'));
//     }

//     ctx.response.status = 204;
//   }
// });

// => Body Parsers
// app.use(koaBody({
//   text: true,
//   urlencoded: true,
//   multipart: true,
//   json: true,
// }));

// => GET/POST
// const subscriptions = new Map();
// app.use(async ctx => {
//   const { name, phone } = ctx.request.querystring; 
//   // const { name, phone } = ctx.request.body;  // for POST

//   if (subscriptions.has(phone)) {
//     ctx.response.status = 400
//     ctx.response.body = 'You already subscribed';
//     return;
//   }

//   subscriptions.set(phone, name);
//   ctx.response.body = 'Ok';
// });

// => File Uploading
// app.use(async ctx => {
//   const { name } = ctx.request; 
//   const { file } = ctx.request.files;
//   const link = await new Promise((resolve, reject) => {
//     const oldPath = file.path;
//     const filename = uuid.v4();
//     const newPath = path.join(public, filename);

//     const callback = (error) => reject(error);

//     const readStream = fs.createReadStream(oldPath);
//     const writeStream = fs.createWriteStream(newPath);

//     readStream.on('error', callback);
//     writeStream.on('error', callback);

//     readStream.on('close', () => {
//       console.log('close');
//       fs.unlink(oldPath, callback);
//       resolve(filename);
//     });

//     readStream.pipe(writeStream);
//   });

//   ctx.response.body = link;
// });

// => REST
// const Router = require('koa-router');
// const router = new Router();
// const contacts = [];

// router.get('/contacts', async (ctx, next) => {
//   // return list of contacts
//   console.log('contacts');
//   ctx.response.body = contacts;
// });
// router.post('/contacts', async (ctx, next) => {
//   // create new contact
//   contacts.push({...ctx.request.body, id: uuid.v4()});
// });
// router.delete('/contacts/:id', async (ctx, next) => {
//   // remove contact by id (ctx.params.id)
//   const index = contacts.findIndex(({ id }) => id === ctx.params.id);
//   if (index !== -1) {
//     contacts.splice(index, 1);
//   };
// });

// app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;
http.createServer(app.callback()).listen(port)