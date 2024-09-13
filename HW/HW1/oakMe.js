import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/name') {
    ctx.response.body = '林沛欣'
  } 
  if(pathname == '/age'){
    ctx.response.body = '19'
  }
  if(pathname == '/gender'){
    ctx.response.body = '女'
  }
  if(pathname == ' '){
    ctx.response.body = '找不到找不到找不到找不到找不到找不到'
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
