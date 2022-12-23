const day=document.querySelector('.days');
const hour=document.querySelector('.hours');
const minute=document.querySelector('.minutes');
const second=document.querySelector('.seconds');

let wantdateword= new Date("Jan 10, 2024 15:37:35").getTime();
setInterval(()=>{
let dateword= new Date().getTime();
let different=wantdateword-dateword;
let d=Math.floor(different/(1000*60*60*24));
let h=Math.floor(different% (1000*60*60*24) / (1000*60*60));
let m=Math.floor(different % (1000*60*60) /(1000*60));
let s=Math.floor(different % (1000*60) / 1000);
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

