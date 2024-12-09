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
  <div style="text-align:center;font-size:16px;padding-right:10px;"> <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/Q&A.html">常見問題</a></div>
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

export function dry1(user){
  return layout('芒果乾',`
    <html>
  <head>
    <link rel="stylesheet" href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/drytemplate.css">
  </head>
 <body>
<div style="text-align: left; padding-left:0px;">
<h1> 原味愛文芒果</h1>
<div class="topnav ">
  <a href="https://linpeic.github.io/ws/%E6%9C%9F%E4%B8%AD/main.html">
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
  <input type="hidden" name="product" value="愛文芒果">
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
export function car(user, buylist) {
  return layout('car', `
    <html>
    <head>
      <title>${user} 的購物車</title>
    </head>
    <body>
      <h1>${user} 的購物車</h1>
      <table border="1">
        <tr>
          <th>產品名稱</th>
          <th>數量</th>
          <th>操作</th>
        </tr>
        ${buylist.map(
          (item) => `
          <tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>
            <form action="/${user}/car/delete/${item.id}" method="post"><br>
            <input type="submit" value="移除" style="width:auto; text-align:center; font-size:10px;">
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