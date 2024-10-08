import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
<body>
<h1>自我介紹 Self-introduction</h1>
<ol>
<li><a href='/name'>名字<a></li>
<li><a href='/age'>年齡<a></li>
<li><a href='/gender'>性別<a></li>
<li><a href='/music'>音樂<a></li>
<li><a href='/dream'>夢想<a></li>
</ol>
</body>
</html>
`
  } 
  else if (pathname == '/name') {
    ctx.response.body = '林沛欣'
  } 
  else if (pathname == '/age') {
    ctx.response.body = '19'
  } 
  else if (pathname == '/gender') {
    ctx.response.body = '女'
  } 
  else if (pathname == '/music') {
    ctx.response.redirect('https://youtu.be/rlRSJNHS40s?si=1DGpVnq2P5qgG7Ke')
  } 
  else if (pathname == '/dream') {
    ctx.response.body = '養狗'
  } 
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })