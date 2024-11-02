// layout 函式，生成包含 title 和 content 的頁面佈局
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
  
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }
    </style>
  </head>
  <body>
    <section id="content">
      <h1>使用者：${users}</h1>
      ${content}
    </section>
  </body>
  </html>
  `
}
export function userList(users) {
  let listHtml = []
  for (let user of users) {
      listHtml.push(`<li><a href="/${user}/">${user}</a></li>`)
  }
  let content=`
  <h1>Users</h1>
  <p>You have <strong>${posts.length}</strong> users!</p>
  <p><a href="/newuser">Create a User</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>`

  return layout('', 'User List', `<ol>${listHtml.join('\n')}</ol>`,content)
}

// 顯示某用戶的貼文列表
export function list(user, posts) {
  let list = []
    for (let post of posts) {
      list.push(`
      <li>
        <h2>${ post.title }</h2>
        <p><a href="/${user}/post/${post.id}">Read post</a></p>
      </li>
      `)
    }
    let content = `
    <h1>/${user}的Posts</h1>
    <p>You have <strong>${posts.length}</strong> posts!</p>
    <p><a href="/${user}/post/new">Create a Post</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
}

// 顯示新增貼文的表單
export function newPost(user) {
  return layout(user, 'New Post', `
    <h1>New Post</h1>
    <form action="/${user}/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
    </form>
  `);
}

// 顯示特定貼文的詳細內容
export function show(user, post) {
  return layout(user, post.title,
    `
    <h1>${post.title}</h1>
    <pre>${post.body}</pre>
  `);
}