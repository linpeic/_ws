// 引入所需模組
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js';
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// 初始化 SQLite 資料庫
const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, user TEXT)");  // 增加 user 欄位

// 定義路由
const router = new Router();
router
  .get('/', userList)             // 顯示所有用戶貼文的首頁
  .get('/:user/', list)            // 顯示特定用戶的貼文列表
  .get('/:user/post/new', add)     // 顯示新增貼文的表單
  .get('/:user/post/:id', show)    // 顯示特定 id 的貼文
  .post('/:user/post', create);    // 提交新貼文

// 初始化應用並啟用路由
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// 自定義查詢函數，用於執行 SQL 查詢並返回結果列表
function query(sql, args = []) {
  let list = [];
  for (const [id, title, body, user] of db.query(sql, args)) {
    list.push({ id, title, body, user });
  }
  return list;
}

// 顯示所有用戶的貼文
async function userList(ctx) {
  const users = query("SELECT DISTINCT user FROM posts");  // 從資料庫中查詢所有不同的用戶
  const userList = users.map((u) => u.user);               // 提取用戶名
  ctx.response.body = await render.userList(userList);     // 渲染用戶列表
}

// 顯示特定用戶的貼文列表
async function list(ctx) {
  const user = ctx.params.user;
  const posts = query("SELECT id, title, body FROM posts WHERE user = ?", [user]); // 查詢該用戶的所有貼文
  console.log('user=', user, 'posts=', posts);
  ctx.response.body = await render.list(user, posts); // 渲染該用戶的貼文列表
}

// 顯示新增貼文的表單
async function add(ctx) {
  const user = ctx.params.user;
  ctx.response.body = await render.newPost(user); // 渲染新增貼文表單
}

// 顯示特定 id 的貼文
async function show(ctx) {
  const user = ctx.params.user;
  const id = ctx.params.id;
  const posts = query("SELECT id, title, body FROM posts WHERE user = ? AND id = ?", [user, id]);
  const post = posts[0];  // 獲取查詢結果的第一條記錄
  if (!post) ctx.throw(404, 'invalid post id');  // 若查無此貼文，返回 404 錯誤
  ctx.response.body = await render.show(user, post); // 渲染貼文內容
}

// 提交新貼文
async function create(ctx) {
  const user = ctx.params.user;
  const body = ctx.request.body();
  if (body.type === "form") {
    const pairs = await body.value;
    const post = {};
    for (const [key, value] of pairs) {
      post[key] = value; // 將表單數據填入貼文物件
    }
    console.log('create:post=', post);
    db.query("INSERT INTO posts (title, body, user) VALUES (?, ?, ?)", [post.title, post.body, user]); // 插入新貼文到資料庫
    ctx.response.redirect(`/${user}/`); // 新增貼文後重定向回該用戶的首頁
  }
}

// 啟動伺服器
console.log('Server run at http://127.0.0.1:8000');
await app.listen({ port: 8000 });