import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, password TEXT, email TEXT)");

const router = new Router();

router
  .get('/login', loginUi)
  .post('/login', login)

const app = new Application()
app.use(Session.initMiddleware())
app.use(router.routes());
app.use(router.allowedMethods());

function userQuery(sql) {
    let list = []
    for (const [id, username, password, email] of sqlcmd(sql)) {
      list.push({id, username, password, email})
    }
    console.log('userQuery: list=', list)
    return list
  }

async function loginUi(ctx) {
    ctx.response.body = await render.loginUi();
  }
  
async function login(ctx) {
    const body = ctx.request.body
    if (body.type() === "form") {
      var user = await parseFormBody(body)
      var dbUsers = userQuery(`SELECT id, username, password, email FROM users WHERE username='${user.username}'`) // userMap[user.username]
      var dbUser = dbUsers[0]
      if (dbUser.password === user.password) {
        ctx.state.session.set('user', user)
        console.log('session.user=', await ctx.state.session.get('user'))
        ctx.response.redirect('/');
      } else {
        ctx.response.body = render.fail()
      }
    }
}