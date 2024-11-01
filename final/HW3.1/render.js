// layout 函式，用於生成包含標題和內容的頁面佈局
export function layout(user, title, content) {
  return `
    <html>
    <head>
      <title>${user}:${title}</title>
      <style>
        body {
          padding: 80px;
          font: 16px Helvetica, Arial;
        }
        h1 { font-size: 2em; }
        h2 { font-size: 1.2em; }
        #posts { margin: 0; padding: 0; }
        #posts li {
          margin: 40px 0;
          padding: 0 0 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
        }
        #posts li:last-child { border-bottom: none; }
        textarea { width: 500px; height: 300px; }
        input[type=text], textarea {
          border: 1px solid #eee;
          border-top-color: #ddd;
          border-left-color: #ddd;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
        }
        input[type=text] { width: 500px; }
      </style>
    </head>
    <body>
      <section id="content">
        <h1>使用者：${user}</h1>
        ${content} <!-- 動態內容插入點 -->
      </section>
    </body>
    </html>
  `;
}

// 顯示用戶列表
export function userList(users) {
  const listHtml = users.map(user => `<li><a href="/${user}/">${user}</a></li>`).join('\n');
  return layout('User List', 'User List', `<ol>${listHtml}</ol>`);
}

// 顯示指定用戶的貼文列表
export function list(user, posts) {
  const listHtml = posts.map(post => `
    <li>
      <h2>${post.title}</h2>
      <p><a href="/${user}/post/${post.id}">Read post</a></p>
    </li>
  `).join('\n');
  const content = `
    <h1>${user}的 Posts</h1>
    <p>You have <strong>${posts.length}</strong> posts!</p>
    <p><a href="/${user}/post/new">Create a Post</a></p>
    <ul id="posts">
      ${listHtml}
    </ul>
  `;
  return layout(user, `${user}的 Posts`, content);
}

// 顯示新增貼文的表單
export function newPost(user) {
  return layout(user, 'New Post', `
    <h1>New Post</h1>
    <p>Create a new post.</p>
    <form action="/${user}/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
    </form>
  `);
}

// 顯示指定貼文的詳細內容
export function show(user, post) {
  return layout(user, post.title, `
    <h1>${post.title}</h1>
    <pre>${post.body}</pre>
  `);
}
