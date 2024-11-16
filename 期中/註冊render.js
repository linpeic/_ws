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
  <a href="/">首頁</a>
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
  <a href="/">首頁</a>
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

export function list(posts, user) {
  console.log('list: user=', user)
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${ post.title } -- by ${post.username}</h2>
      <p><a href="/post/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <html>
  <head>
  <style>
    *{  margin:0;
    padding:0;
  }
  .item2 { grid-area: menu; }
  .item3 { grid-area: main;}
  .item5 { grid-area: footer;}

  .grid-container {
  display: grid;
  height: 100vh;
  grid-template-areas:
    'menu main main main main'
    'menu footer footer footer footer';
  gap: 2px;  
  text-align: center;
  padding: 1px;
  background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/紅龍果1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  }
  .sidebar{
  width: 1fr;
  height: 100vh;
  background-color:rgba(31, 70, 11, 0.8) ;
  transition: width 1s;
  padding:40px;
  }
  #sidebar{
  width: 25px;
  height:100vh;
  transition: width 3s;
  background-color:rgba(31, 70, 11, 0.8) ;
  }
  .ser a {
  overflow: hidden;
  text-align: center;
  display: block;
  text-decoration: none;
  color:rgb(254, 253, 253);
  }
  .ser a:hover {
  background-color:rgba(255, 255, 255,0.5);
  }
  .fanweb a{
  overflow: hidden;
  text-align: center;
  display: block;
  text-decoration: none;
  color:rgb(6, 63, 110);
  }

  .hi{
  text-align:center;
  font-size:30px;
  padding-top: 20px;}
  </style>
  </head>
  <body>
  <div class="grid-container">
  <div id="sidebar" onclick="turn()">
  <div class="sidebar">
  <div class="ser">
  <div class="item2">
  <p style="text-align:center;font-size:22px;padding-bottom:20px; padding-top:5px; padding-right:10px; color:white;"><b>目錄</b></p><hr><hr>
  <br><div style="text-align:center;font-size:16px;padding-right:10px;"> <a
  href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">果乾系列</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:5px;"><a
  href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.html">水果茶系列</a></div>
  <br><hr><hr>

  <div style="text-align:center;font-size:16px;padding-right:10px; color:white;">
  <b>您好，<span id="username-placeholder">訪客</span></b>
  </div>

  <p style="text-align:center;font-size:22px; padding-bottom:20px;padding-top:20px; padding-right:10px; color:white;"><b>其他</b></p><hr><hr>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="http://127.0.0.1:8000/signup">註冊/登入</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="file:///D:/ccc/ccc113aWs/%E6%9C%9F%E4%B8%AD/%E8%B3%BC%E7%89%A9%E8%BB%8A.html">我的購物車</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="https://linpeic.github.io/wp/%E6%9C%9F%E4%B8%AD/Q&A.html">常見問題</a></div>
  </div>
  </div>
  </div>
  </div>

  <div class="item3">
  <div class="hi"><b>真政讚開心果園</b></div><br>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/理念.jpg" alt="故事" width="900px">
  </div>
  
  <div class="item5">
  <p style="text-align:center;font-size:15px;"> <br>聯絡我們</p>
  <p style="text-align:center;font-size:15px;"> FaceBook：</p>
  <div class="fanweb" style="text-align:center;font-size:15px;"><a href="https://www.facebook.com/profile.php?id=100063807405001&mibextid=LQQJ4d">真政讚開心果園</a></div>
  </div>
  </div>
  <script>
  let mode = 'small'
  let sidebar = document.querySelector('#sidebar')
  function turn() {
   if (mode == 'small')
   {
      mode = 'large'
      sidebar.style.width = "250px"
   }else 
   {
      mode = 'small'
      sidebar.style.width = "20px"
   }
  }
  </script>
  </body>
  </html>
  `
  return layout('Posts', content)
}