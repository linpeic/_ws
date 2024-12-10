import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './註冊render.js'
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT, email TEXT)");
db.query("CREATE TABLE IF NOT EXISTS car (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, product TEXT, quantity INTEGER, FOREIGN KEY (username) REFERENCES users(username))");
db.query("PRAGMA foreign_keys = ON");

const router = new Router();

router.get('/', list)
  .get('/signup', signupUi)
  .post('/signup', signup)
  .get('/login', loginUi)
  .post('/login', login)
  .get('/logout', logout)
  .get('/:user', afterlogin)
  .get('/:user/QA', QA)
  .get('/:user/dry', dry)
  .get('/:user/dry1', dry1)
  .get('/:user/dry2', dry2) 
  .get('/:user/dry3', dry3)  
  .get('/:user/dry4', dry4) 
  .get('/:user/dry5', dry5) 
  .get('/:user/dry6', dry6) 
  .get('/:user/water', water)
  .get('/:user/water1', water1)
  .get('/:user/water2', water2)
  .get('/:user/water3', water3)
  .get('/:user/water4', water4)
  .get('/:user/car', car)
  .post('/:user/car/add', addtoCar)
  .post('/:user/car/delete/:id', deleteItem)

const app = new Application()
app.use(async (ctx, next) => {
  if (ctx.request.url.pathname === '/favicon.ico') {
    ctx.response.status = 204; // 返回 204 無内容
    return
  }
  await next()
})
app.use(Session.initMiddleware())
app.use(router.routes());
app.use(router.allowedMethods())


function sqlcmd(sql,args=[]) {
  console.log('sqlsql:', sql)
  try {
    var results =db.query(sql, args)
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

function buyQuery(sql,args=[]) {
  let list = []
  try{
    for (const [id, username, product, quantity] of sqlcmd(sql, args)) {
      list.push({ id, username, product, quantity })
    }
    console.log('buyQuery: list =', list)
  }catch (error) {
  console.log('buyQuery error: ', error)
  }
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
    var dbUsers = userQuery(`SELECT id,username, password, email FROM users WHERE username=?`,[user.username])
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
      }else {
        ctx.response.body =`
          <html>
            <style>
             *{padding-left:17%;
                padding-right:12%;}
              body {
                    background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                  }
              .topnav a {
                float: left;
                display: block;
                text-align: left;
                text-decoration: none;
                color: rgb(28, 96, 231);
              }
            </style>
            <body>
                <title>Errorrrrrrr</title>
                <br><br>
                <h1 style="font-size:20px">登入錯誤 請確認帳號或密碼是否正確</h1>
                <div class="topnav "><p><a href="/login">重新登入</a><a href="/signup">註冊</a></p></div>
            </body>
        </html>
        ` 
      }
    }else {
      ctx.response.body =`
        <html>
            <style>
             *{padding-left:17%;
                padding-right:12%;}
              body {
                    background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                  }
              .topnav a {
                float: left;
                display: block;
                text-align: left;
                text-decoration: none;
                color: rgb(28, 96, 231);
              }
            </style>
            <body>
                <title>Errorrrrrrr</title>
                <br><br>
                <h1 style="font-size:20px">登入錯誤 請確認帳號或密碼是否正確</h1>
                <div class="topnav "><p><a href="/login">重新登入</a><br><a href="/signup">註冊</a></p></div>
            </body>
        </html>
      ` 
    }
  }
}

async function logout(ctx) {
  await ctx.state.session.set('user', null)
  ctx.response.redirect('/')
}

async function list(ctx) {
  ctx.response.body = await render.list();
}

async function afterlogin(ctx) {
  const user = ctx.params.user
  await ctx.state.session.set('user',{ username: user })
  console.log('userafterlogin=', user)
  ctx.response.body = await render.afterlogin(user)
}
async function QA(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.QA(user)
}
async function dry(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry(user)
}
async function dry1(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry1(user)
}
async function dry2(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry2(user)
}
async function dry3(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry3(user)
}
async function dry4(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry4(user)
}
async function dry5(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry5(user)
}
async function dry6(ctx) {
  const user = ctx.params.user
  console.log('userdry=', user)
  ctx.response.body = await render.dry6(user)
}

async function water(ctx) {
  const user = ctx.params.user 
  console.log('userdry=', user)
  ctx.response.body = await render.water(user) 
}

async function water1(ctx) {
  const user = ctx.params.user 
  console.log('userdry=', user)
  ctx.response.body = await render.water1(user) 
}
async function water2(ctx) {
  const user = ctx.params.user 
  console.log('userdry=', user)
  ctx.response.body = await render.water2(user) 
}
async function water3(ctx) {
  const user = ctx.params.user 
  console.log('userdry=', user)
  ctx.response.body = await render.water3(user) 
}
async function water4(ctx) {
  const user = ctx.params.user 
  console.log('userdry=', user)
  ctx.response.body = await render.water4(user) 
}

async function car(ctx) {
  const sessionUser = await ctx.state.session.get('user');
  const user = sessionUser.username;
  console.log('Session user:', await ctx.state.session.get('user'));
  var buylist =await buyQuery(`SELECT id, username,product,quantity FROM car WHERE username=?`,[user])
  console.log("car:username:",user) 
  console.log('buy=', buylist)
  ctx.response.body = await render.car(user, buylist)

}

async function addtoCar(ctx) {
  const body = ctx.request.body
  const sessionUser = await ctx.state.session.get('user')
  console.log('Session user:', sessionUser)
  if (body.type() === "form") {
    const formData = await parseFormBody(body)
    const { product, quantity } = formData
    if (sessionUser != null) {
      try{
        sqlcmd("INSERT INTO car (username,product,quantity) VALUES (?, ?, ?)", [sessionUser.username, product, parseInt(quantity)]);
      }
      catch(error){
        `<html>
          <body>
            <h1>error</h1>
          </body>
        </html>`
      }
      
    } 
    else {
      ctx.throw(404, 'not login yet!');
    }
    ctx.response.redirect(`/${sessionUser.username}/car`)
  }
}

async function deleteItem(ctx) {
  const user= ctx.params.user
  var id = ctx.params.id
  console.log(`User: ${user}, Deleting item ID: ${id}`)
  await buyQuery(`DELETE FROM car WHERE id=? AND username=?`, [id, user])

  ctx.response.redirect(`/${user}/car`);
 
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });