import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './註冊render.js'
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT)");

const router = new Router();

router.get('/', list)
  .get('/signup', signupUi)
  .post('/signup', signup)
  .get('/login', loginUi)
  .post('/login', login)
  .get('/logout', logout)
  .get('/:user', afterlogin)
  .get('/:user/dry', dry) 

const app = new Application()
app.use(Session.initMiddleware())
app.use(router.routes());
app.use(router.allowedMethods());

function sqlcmd(sql, arg1) {
  console.log('sqlsql:', sql)
  try {
    const results = db.query(sql, arg1)
    console.log('sqlcmd: results=', results)
    return results
  } catch (error) {
    console.log('sqlcmd error: ', error)
    throw error
  }
}

function userQuery(sql,args=[]) {
  let list = []
  for (const [id,username, password, email] of sqlcmd(sql,args)) {
    list.push({id,username, password, email})
  }
  console.log('userQuery: list=', list)
  return list
}

async function parseFormBody(body) {
  const pairs = await body.form()
  const obj = {}
  for (const [key, value] of pairs) {
    obj[key] = value
  }
  return obj
}

async function signupUi(ctx) {
  ctx.response.body = await render.signupUi()
}

async function signup(ctx) {
  const body = ctx.request.body
  if (body.type() === "form") {
    var user = await parseFormBody(body)
    console.log('usersignup=', user)
    var dbUsers = userQuery(`SELECT id username, password, email FROM users WHERE username=?`,[user.username])
    console.log('dbUserssignup=', dbUsers)
    if (dbUsers.length === 0) {
      sqlcmd("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [user.username, user.password, user.email])
      ctx.response.body = render.success()
    } else {
      ctx.response.body = render.fail()
    }
  }
}

async function loginUi(ctx) {
  ctx.response.body = await render.loginUi()
}

async function login(ctx) {
  const body = ctx.request.body
  if (body.type() === "form") {
    var user = await parseFormBody(body)
    console.log('userlogin=', user)
    var dbUsers = userQuery(`SELECT id, username, password FROM users WHERE username=?`,[user.username])
    console.log('dbUserlogin=', dbUsers)
    if(dbUsers.length >0){
      const dbUser =dbUsers[0]
      console.log('dbUserpassword：',dbUser.password)
      console.log('userpassword：',user.password)
      if(dbUser.password === user.password) {
        await ctx.state.session.set('user', user)
        console.log('session.user=', await ctx.state.session.get('user'))
        ctx.response.redirect(`/${user.username}`)
      } else {
        ctx.response.body =`
          <html>
            <body>
              <title>Errorrrrrrr</title>
              <p>登入錯誤，請確認帳號或密碼是否正確</p>
              <p><a href="/login">重新登入</a></p>
              <p><a href="/signup">註冊</a></p>
            </body>
          </html>
        ` 
      }
    }
  }
}

async function logout(ctx) {
   await ctx.state.session.set('user', null)
   ctx.response.redirect('https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html')
}

async function list(ctx) {
  ctx.response.body = await render.list();
}

async function afterlogin(ctx) {
  const user = ctx.params.user; // 取得路由參數中的 user
  console.log('user=', user)
  ctx.response.body = await render.afterlogin(user); // 顯示該用戶的貼文
}
async function dry(ctx) {
  const user = ctx.params.user; // 取得路由參數中的 user
  console.log('user=', user)
  ctx.response.body = await render.dry(user); // 顯示該用戶的貼文
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });