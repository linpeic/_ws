export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      *{padding-left:12%;
padding-right:10%;}

.h2{
    font-size:30;
    padding-left:90px;
    padding-bottom:20px;
    padding-top:30px;}
.topnav {
  overflow: hidden;
}
.topnav a {
  display: block;
  text-decoration: none;
  color: rgb(28, 96, 231);
}
body {
  background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
    </style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
  </body>
  </html>
  `
}

export function loginUi() {
  return layout('Login', `
  <div class="h2"><b>會員登入</b></div>
  <div style="text-align:left; padding:0px;">
  <div class="topnav">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html">首頁</a>
  </div></div><br>
  <form action="#" method="post">
    <label for="account">帳號：
    <p><input type="text" placeholder="輸入帳號" name="username"></p>
    <label for="password">密碼：
    <p><input type="password" placeholder="密碼" name="password"></p>
    <p><input type="submit" value="送出"></p>
  </form>
  `)
}

export function signupUi() {
  return layout('Signup', `
  <div class="h2"><b>新用戶註冊</b>
  </div>
  <div style="text-align:left; padding:0px;">
  <div class="topnav">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html">首頁</a>
  </div></div><br>

  <form action="/signup" method="post" style="font-size: 20px;"> 
  <label for="account">帳號：
  <input type="text" id="username" name="username" name="username"></label><br><br>
  <label for="password">密碼：
  <input type="password" name="password"></label><br><br>
  
  <label for="email">email：
  <input type="text" placeholder="@email.com" name="email"></label><br><br>
  <label for="phone">手機號碼：
  <input type="tel" id="phone" name="phone" placeholder="09XX-123-456" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"></label><br><br>

  <div><input type="submit" value="送出">
  <div class="topnav" style="padding-left:260px;font-size:15px;"><a href="http://127.0.0.1:8000/login">已有帳號!登入</a></div>
  </div>
  </form>
  `)
}

export function success() {
  return layout('Success', `
    <html>
      <body>
        <p>註冊成功，請重新登入</p>
        <p><a href="/login">登入</a></p>
      </body>
    </html>
  ` )
}

export function fail() {
  return layout('Fail', `
    <html>
      <body>
        <title>Errorrrrrrr</title>
        <p>註冊錯誤，請重新註冊</p>
        <p><a href="/signup">註冊</a></p>
      </body>
    </html>
  ` )
}

