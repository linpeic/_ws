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
    <input type="text" placeholder="輸入帳號" name="username"><br><br>
    <label for="password">密碼：
    <input type="password" placeholder="密碼" name="password">
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

export function list() {
  let content = `
  <html>
  <head>
    <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.css">
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

  <p style="text-align:center;font-size:22px; padding-bottom:20px;padding-top:20px; padding-right:10px; color:white;"><b>其他</b></p><hr><hr>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="http://127.0.0.1:8000/signup">註冊/登入</a></div>
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

export function afterlogin(user) {
  let content = `
  <html>
  <head>
    <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.css">
  </head>
  <body>
  <div class="grid-container">
  <div id="sidebar" onclick="turn()">
  <div class="sidebar">
  <div class="ser">
  <div class="item2">
  <div style="text-align:center;font-size:30px;padding-right:10px; color:white;">
  <b>歡迎<span id="username-placeholder"><br>${user}</span></b><br><br></div>
  <p style="text-align:center;font-size:22px;padding-bottom:20px; padding-top:5px; padding-right:10px; color:white;"><b>目錄</b></p><hr><hr>
  <br><div style="text-align:center;font-size:16px;padding-right:10px;"> <a
  href="/${user}/dry">果乾系列</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:5px;"><a
  href="/${user}/water">水果茶系列</a></div>
  <br><hr><hr>

  <p style="text-align:center;font-size:22px; padding-bottom:20px;padding-top:20px; padding-right:10px; color:white;"><b>其他</b></p><hr><hr>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="/signup">註冊/登入</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="/${user}/car">我的購物車</a></div>
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
  return layout(`Welcom${user}`, content) // 使用 layout 函式來產生頁面佈局
}

export function dry(user) {
  return layout('dry', `
  <html>
    <head>
      <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.css">
    </head>
    <body>
      <h1>果乾系列</h1>
      <div style="text-align:left; padding:0px;">
      <div class="topnav1">
      <a href="/${user}">首頁</a>
      </div></div><br>
      <div class="grid-container">
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d1.jpg" alt="愛文芒果乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry1.html"style="font-size:17px" >
      <b >愛文芒果乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：80g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d2.jpg" alt="原味紅龍果乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry2.html">
      <b style="font-size:17px;" >原味紅龍果乾</b></a>
      <p style="font-size:15px ;background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d3.jpg" alt="甘草芭樂乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry3.html">
      <b style="font-size:17px">甘草芭樂乾</b></a>
      <p style="font-size:15px ;background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d4.jpg" alt="原味火龍果乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry4.html">
      <b style="font-size:17px;"  >原味火龍果乾</b></a>
      <p style="font-size:15px;background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d5.jpg" alt="原味香蕉乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry5.html">
      <b style="font-size:17px;">原味香蕉乾</b></a>
      <p style="font-size:15px;background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：100g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d6.jpg" alt="原味芭蕉乾"style="height:200px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/dry6.html">
      <b style="font-size:17px;"><br>原味芭蕉乾</b></a>
      <p style="font-size:15px;background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：100g</p>
      </div></div>
      </div>
    </body>
  </html>
  ` )
}

export function water(user) {
  return layout('water', `
  <html>
  <head>
    <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.css">
  </head>
  <body>
  <h1>水果茶系列</h1>
  <div style="text-align:left; padding:0px;">
  <div class="topnav1">
  <a href="/${user}">首頁</a>
  </div></div><br>
  <div class="grid-container">
  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w1.jpg" alt="芒芒遇見你" style="height:220px; padding:0px ;padding-top:10px"><br> 
  
  <div class="topnav ">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/water1.html"style="font-size:17px; ">
  <b >芒芒遇見你</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：100元<br>重量規格：內含6小包，每小包（16g+-1g)</p>
  </div></div>
  
  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w2.jpg" alt="粉紅泡泡" style="height:220px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/water2.html">
  <b style="font-size:17px;" >粉紅泡泡</b></a>
   <p style="font-size:15px;background-color:Beige;">售價：100元<br>重量規格：內含6小包，每小包（16g+-1g)</p>
  </div></div>
  
  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w3.jpg" alt="紅心土芭樂乾" style="height:230px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/water3.html">
  <b style="font-size:17px;"  >紅心土芭樂乾</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：120元<br>重量：80g</p>
  </div></div>
  
  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w4.jpg" alt="洛神花果醬" style="height:230px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/water4.html">
  <b style="font-size:17px;">洛神花果醬</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：200元<br>容量：370ml</p>
  </div></div>
  </div>
  </body>
  </html>
  ` )
}

export function car() {
  return layout('car', `
    <html>
      <body>
        <title>car</title>
        <p>購物車</p>
      </body>
    </html>
  ` )
}