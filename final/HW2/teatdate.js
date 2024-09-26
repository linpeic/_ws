//const ti=Date.now();
let t=new Date();
let a=t.toLocaleString();
let c=t.toDateString();
let b=t.toUTCString();
let d=t.toISOString();
let e='星期'+t.getDay()+' / '+t.getDate()+' / '+t.getMonth()+' / '+t.getFullYear();


console.log(t);
console.log(a);
console.log(c);
console.log(b);
console.log(d);
console.log(e);

/*這個有幾個參考：
https://www.delftstack.com/zh-tw/howto/javascript/javascript-get-current-date/#:~:text=%E5%9C%A8%20JavaScript%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20Date.toISOString%28%29%20%E6%96%B9%E6%B3%95%E7%8D%B2%E5%8F%96%E7%95%B6%E5%89%8D%E6%97%A5%E6%9C%9F%20%E6%AD%A4%E6%96%B9%E6%B3%95%E7%94%A8%E6%96%BC%E4%BB%A5%20ISO%208601,%E6%A0%BC%E5%BC%8F%E8%BF%94%E5%9B%9E%E6%97%A5%E6%9C%9F%E5%92%8C%E6%99%82%E9%96%93%E3%80%82%20%E5%AE%83%E9%80%9A%E5%B8%B8%E4%BB%A5%2024%20%E5%80%8B%E5%AD%97%E5%85%83%E7%9A%84%E9%95%B7%E6%A0%BC%E5%BC%8F%E8%BF%94%E5%9B%9E%E8%BC%B8%E5%87%BA%EF%BC%8C%E4%BE%8B%E5%A6%82%20YYYY-MM-DDTHH%3Amm%3Ass.sssZ%E3%80%82%20%E6%88%91%E5%80%91%E5%8F%AF%E4%BB%A5%E6%B3%A8%E6%84%8F%E5%88%B0%E6%97%A5%E6%9C%9F%E5%92%8C%E6%99%82%E9%96%93%E7%94%B1%E5%AD%97%E6%AF%8D%20T%20%E5%88%86%E9%96%8B%E3%80%82*/