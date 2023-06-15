let sec=document.querySelector('.secs');
let min=document.querySelector('.mins');
let hours=document.querySelector('.hours');
let dot=document.querySelector('.dot');

function tiktak(){
let second=new Date().getSeconds();
let minute=new Date().getMinutes();
let hour=new Date().getHours();

sec.style.transform=`rotate(${180+(second*6)}deg)`
min.style.transform=`rotate(${180+(minute*6)}deg)`
hours.style.transform=`rotate(${180+(hour*30)}deg)`
console.log(second,minute,hour);
}
setInterval(tiktak,1000);