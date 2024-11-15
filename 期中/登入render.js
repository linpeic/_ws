export function layout(user,title, content) {
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
  background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/登入.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
    <script>
      function submit(event){
        event.preventDefault()
        alert('${user}您好')
        setTimeout(function(){
          window.location.href = "https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html"; },3000)
          }
      }
    </script>
  </body>
  </html>
  `
}

export function loginUi(user) {
  return layout(user,'Login', `
  <div class="h2"><b>會員登入</b></div>
  <div style="text-align:left; padding:0px;">
  <div class="topnav">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html">首頁</a>
  </div></div><br>
  <form onsubmit="submit(event)" method="post">
    <label for="account">帳號：
    <p><input type="text" placeholder="輸入帳號" name="username"></p>
    <label for="password">密碼：
    <p><input type="password" placeholder="密碼" name="password"></p>
    <p><input type="submit" value="送出"></p>
  </form>
  `)
}