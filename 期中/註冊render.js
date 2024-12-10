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
        // background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
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
export function signupUi() {
  return layout('Signup', `
  <html>
  <style>
   body {
        background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
        background-size: cover;
        background-repeat: no-repeat;
      }
  </style>
  <body>
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
  </body>
  </html>
  `)
}
export function loginUi() {
  return layout('Login', `
  <html>
  <style>
   body {
        background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
        background-size: cover;
        background-repeat: no-repeat;
      }
  </style>
  <body>
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
  </body>
  </html>
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
  <div class="hi" style="font-size:40px;"><b>真政讚開心果園</b></div><br>
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
  return layout('Welcome', content)
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
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="/">登出</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="/${user}/car">我的購物車</a></div>
  <br>
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/Q&A.html">常見問題</a></div>
  </div>
  </div>
  </div>
  </div>

  <div class="item3">
  <div class="hi" style="font-size:40px;"><b>真政讚開心果園</b></div><br>
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
  return layout(`Welcom${user}`, content)
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
      <a href="/${user}/dry1"style="font-size:17px" >
      <b>愛文芒果乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：80g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d2.jpg" alt="原味紅龍果乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="/${user}/dry2"style="font-size:17px" >
      <b>原味紅龍果乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d3.jpg" alt="甘草芭樂乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="/${user}/dry3"style="font-size:17px" >
      <b>甘草芭樂乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d4.jpg" alt="原味火龍果乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="/${user}/dry4"style="font-size:17px" >
      <b>原味火龍果乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：90g</p>
      </div></div>
      
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d5.jpg" alt="原味香蕉乾" style="height:230px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="/${user}/dry5"style="font-size:17px" >
      <b>原味香蕉乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：100g</p>
      </div></div>
      
      <div>
      <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d6.jpg" alt="原味芭蕉乾"style="height:200px; padding:0px ;padding-top:10px;"><br> 
      <div class="topnav ">
      <a href="/${user}/dry6"style="font-size:17px" >
      <b>原味芭蕉乾</b></a>
      <p style="font-size:15px ; background-color: rgba(229, 229, 219, 1.5);">售價：120元<br>重量：100g</p>
      </div></div>
      </div>
    </body>
  </html>
  ` )
}

export function dry1(user){
  return layout('原味愛文芒果',`
  <html>
  <head>
    <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
  </head>
 <body>
<div style="text-align: left; padding-left:0px;">
<h1> 原味愛文芒果</h1>
<div class="topnav ">
  <a href="/${user}">
  首頁</a> < 原味愛文芒果 >
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a>
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d1.jpg" alt="原味愛文芒果乾"  style="width:240px; font-size:30px; padding:0px;">
  <div style=font-size:25px;> 原味愛文芒果乾</div><br>
  <p style="font-size:14px;"> 愛文芒果，草生種植，自然熟成，堅持不施灑藥物及除草劑，採人工及割草機除草，每日新鮮現採，製作成的正港愛文芒果乾，無糖、無添加防腐劑及任何添加物，讓您每口都是原汁原味的健康美味</p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包120元 重量：80g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="愛文芒果乾">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  原味愛文芒果乾
  </div>
  <br>
愛文芒果草生種植，自然熟成，堅持不施灑藥物及除草劑，採人工及割草機除草，每日新鮮現採，製作成的正港愛文芒果乾，無糖、無添加防腐劑及任何添加物，讓您每口都是原汁原味的健康美味<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：愛文芒果<br>
#重量規格：原味愛文芒果乾80g<br>
#產品售價：每包120元<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}

export function dry2(user){
  return layout('原味紅龍果乾',`
   <html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>原味紅龍果乾</h1>
<div class="topnav ">
   <a href="/${user}">
  首頁</a> < 原味紅龍果乾 >
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a>
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d2.jpg" alt="原味紅龍果乾"  style="width:240px; font-size:30px; padding:0px;">
  <div style=font-size:25px;>原味紅龍果乾</div><br>
  <p style="font-size:14px;">原味紅龍果乾採用自家果園草生種植紅龍果<br>採低溫烘培，像水果軟糖Q甜好滋味，細細的咀嚼還多一份芝麻的口感</p>
  </div>
  <div class="item2">
 訂購資訊：<br>

  <label style="font-size:15px;">售價：每包120元 重量：90g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="原味紅龍果乾">
  <div class="quantity" style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  原味紅龍果乾
  </div>
  <br>
原味紅龍果乾採用自家果園草生種植紅龍果<br>採低溫烘培，像水果軟糖Q甜好滋味<br>細細的咀嚼還多一份芝麻的口感<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：紅肉火龍果<br>
#重量規格：原味紅龍果乾90g<br>
#產品售價：每包120元<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}

export function dry3(user){
  return layout('甘草芭樂乾',`
 <html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>甘草芭樂乾</h1>
<div class="topnav ">
   <a href="/${user}">
  首頁</a>  
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a>< 甘草芭樂乾 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d3.jpg" alt="甘草芭樂乾"  style="width:240px;  padding:0px;">
  <div  style="font-size:25px;"> 甘草芭樂乾</div><br>
  <p style="font-size:15px;">甘草芭樂乾保留濃濃芭樂香味及紮實口感，讓人一口接一口
不添加糖及防腐劑，享受美味健康無負擔喔！</p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包120元 重量：90g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="甘草芭樂乾">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>

  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  甘草芭樂乾
  </div>
  <br>
甘草芭樂乾保留濃濃芭樂香味及紮實口感，讓人一口接一口<br>
不添加糖及防腐劑，享受美味健康無負擔喔！<br>
#產地來源：嘉義縣鹿草鄉<br>
#商品介紹：本產品自產自銷，草生種植，採預訂制，待採收後再行烘培。<br>水果乾(片)為季節限定，依當季水果生產而有不同變化，採用新鮮整顆水果切片，低溫長時間製作。<br>另外，我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天。<br>
#原料：芭樂、甘草粉<br>
#重量規格：90g<br>
#產品售價：每包120元<br>
#保存：冷藏3個月<br>
*請避免陽光直射<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！<br>
每2小時就要翻面一次，非常耗工！<br>
相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}

export function dry4(user){
  return layout('原味火龍果乾',`
 <html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>原味火龍果乾</h1>
<div class="topnav ">
     <a href="/${user}">
  首頁</a>  
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a>< 原味火龍果乾 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d4.jpg" alt="原味火龍果乾"  style="width:240px;  padding:0px;">
  <div  style="font-size:25px;"> 原味火龍果乾</div><br>
  <p style="font-size:15px;">原味火龍果乾採用自家果園草生種植火龍果<br>採低溫烘培，像水果軟糖Q甜好滋味，細細的咀嚼還多一份芝麻的口感</p>
  </div>
  <div class="item2">
訂購資訊：<br>
  <label style="font-size:15px;">售價：每包120元 重量：90g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="原味火龍果乾">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
    <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  原味火龍果乾
  </div>
  <br>
原味火龍果乾採用自家果園草生種植火龍果<br>採低溫烘培，像水果軟糖Q甜好滋味，細細的咀嚼還多一份芝麻的口感<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：白肉火龍果<br>
#重量規格：原味火龍果乾90g<br>
#產品售價：每包120元<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}

export function dry5(user){
  return layout('原味香蕉乾',`
 <html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>原味香蕉乾</h1>
<div class="topnav ">
<a href="/${user}"
  首頁</a>  
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a> < 原味香蕉乾 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d5.jpg" alt="原味香蕉乾"  style="width:240px;  padding:0px;">
  <div style="font-size:25px;">原味香蕉乾</div><br>
  <p style="font-size:15px;">原味香蕉乾採低溫慢烘，保留水果的原味無任何添加物<br>吃得到香蕉原有香Q的鮮甜果香味道跟營養。</p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包120元 重量：100g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="原味香蕉乾">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>

  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  原味香蕉乾
  </div>
  <br>
香蕉乾採低溫慢烘，保留水果的原味無任何添加物<br>吃得到香蕉原有香Q的鮮甜果香味道跟營養。<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：香蕉<br>
#產品售價：每包120元<br>
#重量規格：每包 100g<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}
export function dry6(user){
  return layout('原味芭蕉乾',`
<html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>原味芭蕉乾</h1>
 <div class="topnav ">
<a href="/${user}">
  首頁</a>  
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%9E%9C%E4%B9%BE.html">
  果乾系列</a>< 原味芭蕉乾 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/d6.jpg" alt="原味芭蕉乾"  style="width:245px; font-size:30px;  padding:0px;">
  <div  style="font-size:25px;"> 原味芭蕉乾</div><br>
  <p style="font-size:15px;">原味芭蕉乾採低溫慢烘，保留水果的原味無任何添加物<br>吃得到芭蕉原有香Q的鮮甜果香味道跟營養<br>與香蕉乾相比，口感比較Q彈。</p>
  </div>
  <div class="item2">
 訂購資訊：<br>
 <label style="font-size:15px;">售價：每包120元 重量：100g</label>
 <form action="/${user}/car/add" method="post"><br>
 <input type="hidden" name="product" value="原味芭蕉乾">
 <div class="quantity"style="font-size:15px;" >訂購數量(包)：
 <input type="number" name="quantity" min="1" max="20" required>
 </div>
 <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
 <br>
 </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  原味芭蕉乾
  </div>
  <br>
芭蕉乾採低溫慢烘，保留水果的原味無任何添加物<br>吃得到芭蕉原有香Q的鮮甜果香<br>味道跟營養與香蕉乾相比，口感比較Q彈。<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：芭蕉<br>
#產品售價：每包120元<br>
#重量規格：每包100克<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>
【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
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
  <a href="/${user}/water1"style="font-size:17px" >
  <b>芒芒遇見你</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：100元<br>重量規格：內含6小包，每小包（16g+-1g)</p>
  </div></div>
  
  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w2.jpg" alt="粉紅泡泡" style="height:220px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="/${user}/water2"style="font-size:17px" >
  <b>粉紅泡泡</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：100元<br>重量規格：內含6小包，每小包（16g+-1g)</p>
  </div></div>

  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w3.jpg" alt="紅心土芭樂乾" style="height:230px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="/${user}/water3"style="font-size:17px" >
  <b>紅心土芭樂乾</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：120元<br>重量：80g</p>
  </div></div>

  <div>
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w4.jpg" alt="洛神花果醬" style="height:230px; padding:0px  ;padding-top:10px"><br> 
  <div class="topnav ">
  <a href="/${user}/water4"style="font-size:17px" >
  <b>洛神花果醬</b></a>
  <p style="font-size:15px;background-color:Beige;">售價：200元<br>容量：370ml</p>
  </div></div>

  </div>
  </body>
  </html>
  ` )
}

export function water1(user){
  return layout('芒芒遇見你',`
<html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/watertemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>芒芒遇見你</h1> <div class="topnav ">
  <a href="/${user}">首頁</a>
<a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.html">水果茶系列 </a>< 芒芒遇見你 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w1.jpg" alt="芒芒遇見你"  style="width:280px; font-size:30px; padding:0px;">
  <div  style="font-size:25px;"> 芒芒遇見你</div><br>
 <p style="font-size:14px;">當芒果乾與蘋果乾相遇，是一場美好的邂逅。<br>尾韻帶有土芭樂及檸檬的香氣，為這場邂逅增添了新的火花。<br></p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包100元 重量規格：內含6小包，每小包(16g+-1g)</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="芒芒遇見你">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  芒芒遇見你
  </div>
  <br>
當芒果乾與蘋果乾相遇，是一場美好的邂逅。尾韻帶有土芭樂及檸檬的香氣，為這場邂逅增添了新的火花。<br>
#產地來源：嘉義縣鹿草鄉<br>
#內容物：無加糖愛文芒果乾+蘋果乾+紅心土芭樂+檸檬片<br>
#產品售價：每包100元<br>
#重量規格：內含6小包，每小包（16g+-1g)<br>
#甜度：全部果乾皆無額外添加糖 保留水果天然的風味<br>
#保存：冷藏3個月<br>
#食用辦法：一小包以300cc～400cc的溫熱水沖泡即可<br>
*小提醒：本產品含有芒果，對芒果過敏者不適合食用<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>

採用新鮮整顆水果切片，低溫長時間製作<br>

水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
熱泡:將果乾放於熱水裡，浸泡等待3-5分鐘即可享用一杯健康美味的水果茶<br>

*可隨喜好添加蜂蜜或冰糖風味更佳<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>

【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}
export function water2(user){
  return layout('粉紅泡泡',`
<html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/watertemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>粉紅泡泡</h1>
 <div class="topnav ">
 <a href="/${user}">首頁</a>
<a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.html">水果茶系列 </a>< 粉紅泡泡 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w2.jpg" alt="粉紅泡泡"  style="width:260px; font-size:30px; padding:0px;">
  <div  style="font-size:25px;">粉紅泡泡</div><br>
 <p style="font-size:14px;">粉紅泡泡是一個美好的幻想，這杯甜甜的水果茶，能延續這甜甜的美夢。<br></p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包100元 重量規格：內含6小包，每小包(16g+-1g)</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="粉紅泡泡">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  粉紅泡泡
  </div>
  <br>
粉紅泡泡是一個美好的幻想，這杯甜甜的水果茶，能延續這甜甜的美夢。<br>
#產地來源：嘉義縣鹿草鄉<br>
#內容物：紅火龍果乾+蘋果乾+紅心土芭樂+檸檬片<br>
#產品售價：每包100元<br>
#重量規格：內含6小包，每小包（16g+-1g)<br>
#甜度：全部果乾皆無額外添加糖 保留水果天然的風味<br>
#保存：冷藏3個月<br>
#食用辦法：一小包以300cc～400cc的溫熱水沖泡即可<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>
水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
熱泡:將果乾放於熱水裡，浸泡等待3-5分鐘即可享用一杯健康美味的水果茶<br>
*可隨喜好添加蜂蜜或冰糖風味更佳<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>

【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}
export function water3(user){
  return layout('紅心土芭樂乾',`
<html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/watertemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>紅心土芭樂乾</h1>
  <div class="topnav ">
 <a href="/${user}">首頁</a>
<a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.html">水果茶系列 </a>< 紅心土芭樂乾 >
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w3.jpg" alt="紅心土芭樂乾"  style="width:250px; font-size:30px;  padding:0px;">
  <div  style="font-size:25px;"> 紅心土芭樂乾</div><br>
  <p style="font-size:15px;">採用自然生長的紅心土芭樂果實，切成薄片曬乾後製成芭樂乾<br>香氣濃厚、口感甘醇，加熱水沖泡就能喝到清晰自然的果香味<br>紅心土芭樂茶帶微微的果香與特殊輕澀味清爽，少負擔<br>暖心暖胃，口口回甘，單純又美好的茶飲！<br></p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每包120元 重量：80g</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="紅心土芭樂乾">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  紅心土芭樂乾
  </div>
  <br>
採用自然生長的紅心土芭樂果實<br>切成薄片曬乾後製成芭樂乾，香氣濃厚、口感甘醇<br>加熱水沖泡就能喝到清晰自然的果香味<br>紅心土芭樂茶帶微微的果香與特殊輕澀味清爽，少負擔<br>暖心暖胃，口口回甘，單純又美好的茶飲！<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：紅心土芭樂<br>
#產品售價：每包120元<br>
#重量規格：紅心土芭樂乾80g<br>
#保存：冷藏3個月<br>
#商品介紹：自產自銷，採預訂制，待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
採用新鮮整顆水果切片，低溫長時間製作<br>

水果乾(片)為季節限定，依當季水果生產而有不同變化<br>
熱泡:將果乾放於熱水裡，浸泡等待3-5分鐘即可享用一杯健康美味的水果茶<br>

*可隨喜好添加蜂蜜或冰糖風味更佳<br>
*請避免陽光直射<br>
因我們都是純手工製作，下單前請先確認是否有貨，如沒有可能要煩請等後幾天<br>

【低溫烘培技術】<br>
為了使果乾Q彈並鎖住果膠！每2小時就要翻面一次，非常耗工！相對成本也非常高，如果不這麼做的話，烤出來的果乾就會乾乾扁扁的哦！<br>

【自然甜味甜而不膩】<br>
果乾的甜味來自低溫烘培鎖住果膠，自然甜而不膩，相對加了砂糖調味的果乾來說，風味可是完全不同的哦！<br>
</div> 
</div>
</body>
</html>
    `)
}
export function water4(user){
  return layout('洛神花果醬',`
<html>
<head>
  <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/watertemplate.css">
</head>
<body>
<div style="text-align: left; padding-left:0px;">
<h1>洛神花果醬</h1>
   <div class="topnav ">
 <a href="/${user}">首頁</a>
<a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/%E6%B0%B4%E6%9E%9C%E8%8C%B6.html">水果茶系列 </a>< 洛神花果醬 > 
</div></div>
<br>
<div class="grid-container">
  <div class="item1">
  <img src="https://raw.githubusercontent.com/linpeic/ws/master/期中/w4.jpg" alt="洛神花果醬"  style="width:260px; font-size:30px; padding:0px;">
  <div  style="font-size:25px;">洛神花果醬</div><br>
 <p style="font-size:14px;">酸酸甜甜的滋味，不管是用熱水沖泡亦或是作為果獎塗抹，皆有絕佳的風味<br>減糖配方，清爽少負擔<br></p>
  </div>
  <div class="item2">
 訂購資訊：<br>
  <label style="font-size:15px;">售價：每瓶200元 容量：370ml</label>
  <form action="/${user}/car/add" method="post"><br>
  <input type="hidden" name="product" value="洛神花果醬">
  <div class="quantity"style="font-size:15px;" >訂購數量(包)：
  <input type="number" name="quantity" min="1" max="20" required>
  </div>
  <input type="submit" value="加入購物車" style="width:auto; text-align:center; font-size:10px;">
  <br>
  </form>
  <br>
  #交易付款方式：轉帳付款<br>
  #運費計算：<br>
  <table>
  <tr>
    <th>運送方式/運費</th>
    <th>門檻</th>
    <th>運費</th>
  </tr>
  <tr>
    <td>賣貨便</td>
    <td>未滿1100元</td>
    <td>運費38元</td>
  </tr>
  <tr>
    <td></td>
    <td>滿1100元</td>
    <td>免運</td>
  </tr>
  <tr>
    <td>宅急便</td>
    <td>未滿10包</td>
    <td>運費100元</td>
  </tr>
   <tr>
    <td></td>
    <td>滿10包</td>
    <td>免運費</td>
  </tr>
</table>
  </div> 
  <div class="item3">
  <div style="font-size:20px; text-align:center;">
  洛神花果醬
  </div>
  <br>
酸酸甜甜的滋味，減糖配方，清爽少負擔<br>
#產地來源：嘉義縣鹿草鄉<br>
#原料：洛神花、砂糖<br>
#產品售價：一瓶200元<br>
#重量規格：一瓶370ml<br>
#運費計算：宅急便運送10包以下，運費每次100元，10包以上免運<br>
#保存：冷藏3個月，開瓶後請儘速食用完畢<br>
#商品介紹：自產自銷，採預訂制<br>待採收後再行烘培，依訂購順序付款後新鮮出貨<br>
#食用辦法：可以厚塗抹於吐司、亦可以用熱水泡茶來喝。<br>
吃的時候還會有洛神花碎碎的果粒<br>不添加人工色素、果膠、以及防腐劑，讓您可以安心享用。<br>
</div> 
</div>
</body>
</html>
    `)
}

export function car(user, buylist) {
  return layout('car', `
    <html>
    <head>
      <style>
        *{padding-left:12%;
          padding-right:12%;}
          table 
        {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width:100%;
        }
        body {
          background-image: url('https://raw.githubusercontent.com/linpeic/ws/master/期中/芒果園.jpg');
          background-size: cover;
          background-repeat: no-repeat;
        }
        td{
         border: 1px solid #dddddd;
         text-align: center;
         padding: 5px;
         background-color:white
        }
        
        th{
          border: 1px solid #dddddd;
          text-align: center;
          padding: 5px;
          color:white;
          background-color:rgb(141,152,129)
        }
      </style>
    </head>
    <body>
      <h1 style="font-size:35px; text-align:center;">${user} 的購物車</h1>
      <table>
        <tr>
          <th>產品名稱</th>
          <th>數量</th>
          <th>移除商品</th>
        </tr>
        ${buylist.map(
          (item) => `
          <tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>
           <form action="/${user}/car/delete/${item.id}" method="post"><br>
           <input type="submit" value="移除"  style="width:auto; text-align:center; font-size:10px;">
            </form>
            </td>
          </tr>
        `
        ).join('')}
      </table>
      <a href="/${user}">繼續購物</a>
    </body>
    </html>
  `)
}