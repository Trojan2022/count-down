const day=document.querySelector('.days');
const hour=document.querySelector('.hours');
const minute=document.querySelector('.minutes');
const second=document.querySelector('.seconds');


setInterval(()=>{
let dateword= new Date();
let d=dateword.getDate();
let h=dateword.getHours();
let m=dateword.getMinutes();
let s=dateword.getSeconds();
if(d<10){
    d="0"+d;
}
if(h<10){
    h="0"+h;
}
if(m<10){
    m='0'+m;
}
if(s<10){
    s='0'+s;
}   

day.textContent=d;
hour.textContent=h;
minute.textContent=m;
second.textContent=s;
if(dateword<10){
    dateword='0'+dateword;
}
},1000);

