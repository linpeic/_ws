import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js';
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("blog.db");
// db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT,user TEXT, title TEXT, body TEXT)");
db.query("CREATE TABLE IF NOT EXISTS us (userer TEXT)");
const router = new Router();


router // 根據不同用戶顯示貼文列表
  .get('/', userList)
  .get('/:user/', list) // 根據不同用戶顯示貼文列表
  .get('/:user/post/new', add) // 顯示新增貼文的表單
  .get('/:user/post/:id', show) // 顯示特定 id 的貼文
  .post('/:user/post', create); // 提交新貼文

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

function queryus(sql) {
  let list = []
  for (const [userer] of db.query(sql)) {
    list.push({userer})
  }
  return list
}

function query(sql,args=[]) {
  let list = []
  for (const [id,user,title, body] of db.query(sql,args)) {
    list.push({id,user,title, body})
  }
  return list
}

async function userList(ctx) {
  let user = queryus("SELECT userer FROM us");  // 從資料庫中查詢所有不同的用戶

  console.log('list:user=', user)
  ctx.response.body = await render.userList(user)
}

// 顯示某個用戶的貼文列表
async function list(ctx) {
  const user = ctx.params.user; // 取得路由參數中的 user
  let posts = query("SELECT id,user, title, body FROM posts WHERE user=?",[user]);//查詢指定用戶(user)的貼文

  // console.log('user=', user)//
  
  console.log('list:posts=', posts)

  if (!posts[user]) {
    posts[user] = []; // 若用戶的貼文列表不存在，則初始化為空陣列
  }//
  // console.log('posts[user]=', posts[user])//

  ctx.response.body = await render.list(user, posts); // 顯示該用戶的貼文
}

// 顯示新增貼文的表單
async function add(ctx) {
  const user = ctx.params.user; // 取得路由中的 user

  // console.log('add:user=', user)//

  ctx.response.body = await render.newPost(user); // 顯示新增貼文表單
}

// 顯示特定 id 的貼文
async function show(ctx) {
  const user = ctx.params.user; // 取得路由中的 user
  const id = ctx.params.id; // 取得路由中的 id
  let posts = query("SELECT id,user, title, body FROM posts WHERE id=? AND user=?",[id,user]);
  let post = posts[0];  
  if (!post) ctx.throw(404, 'invalid post id'); // 若找不到貼文，拋出 404 錯誤
  ctx.response.body = await render.show(user,post); // 顯示貼文內容
}

// 提交新貼文
async function create(ctx) {
  const user = ctx.params.user||"joo"; // 取得路由中的 user
  const body = ctx.request.body;
  if (body.type() === "form") {
    const pairs = await body.form(); // 解析表單數據
    const post = {};
    for (const [key, value] of pairs) {
      post[key] = value; // 將表單數據填入貼文物件
    }
    let posts=("SELECT id,user, title, body FROM posts WHERE user=?",[user])
    console.log('post=', post);
    if (!posts[user]) {
      posts[user] = []; // 若用戶的貼文列表不存在，則初始化為空陣列
    }//戶的貼文列表
    console.log('create:post=', post);
    post.created_at = new Date(); // 設定貼文的建立時間
    // post.id = id; // 設定貼文的 id//
    db.query("INSERT INTO posts (user,title, body) VALUES (?,?,?)", [user,post.title, post.body]); 
    ctx.response.redirect(`/${user}/`); // 新增貼文後重定向回該用戶的首頁
  }

}

console.log('Server run at http://127.0.0.1:8000');
await app.listen({ port: 8000 });