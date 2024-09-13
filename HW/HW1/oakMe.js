import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if(pathname == '127.0.0.1:8000'){
    ctx.response.body = '找不到找不到找不到找不到找不到找不到'
  }
  if (pathname == '/name') {
    ctx.response.body = '姓名：林沛欣'
  } 
  if(pathname == '/age'){
    ctx.response.body = '年齡：19'
  }
  if(pathname == '/gender'){
    ctx.response.body = '性別：女'
  }
  
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
