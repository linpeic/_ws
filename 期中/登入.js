import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './登入render.js'
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";


const userMap = {
  joo: { username:'joo', password: '123' },
  snoopy: { username:'snoopy', password: '321' }
}

const router = new Router();

router
  .get('/login', loginUi)
  .post('/login', login)
  .get('/logout', logout)

const app = new Application();
app.use(Session.initMiddleware())
app.use(router.routes());
app.use(router.allowedMethods());


async function parseFormBody(body) {
  const pairs = await body.form()
  const obj = {}
  for (const [key, value] of pairs) {
    obj[key] = value
  }
  return obj
}

async function loginUi(ctx) {
  const user =ctx.params.username;
  ctx.response.body = await render.loginUi(user);
}

async function login(ctx) {
  const body = ctx.request.body
  if (body.type() === "form") {
    var user = await parseFormBody(body)
    console.log('user=', user)
    var dbUser = userMap[user.username]
    console.log('dbUser=', dbUser)
    if (dbUser.password === user.password) {
      await ctx.state.session.set('user', user)
      console.log('session.user=', await ctx.state.session.get('user'))
      ctx.response.redirect('https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html');
    } else {
      ctx.response.body = '登入錯誤，請確認帳號或密碼是否正確'
    }
  }
}

async function logout(ctx) {
   await ctx.state.session.set('user', null)
   ctx.response.redirect('https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html')
}

console.log('Server run at http://127.0.0.1:8000/login')
await app.listen({ port: 8000 });
