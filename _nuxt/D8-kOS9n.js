import{D as h,h as d}from"./HWlaNmGq.js";const s={syncDigit:(t,n=2)=>(typeof t=="number"&&(t=`${t}`),t.length===1&&(t=`0${t}`),t),chckSameDay:(t,n)=>t.getUTCFullYear()===n.getUTCFullYear()&&t.getUTCMonth()===n.getUTCMonth()&&t.getUTCDate()===n.getUTCDate(),chckDateIsToday:t=>s.chckSameDay(t,new Date(Date.now())),getWithOutMillisecond:t=>~~(t/1e3),addMillisecond:t=>new Date(+`${t}000`)},T=h("dateStore",()=>{const t=d({date:new Date(Date.now())}),n=()=>{t.date=new Date},c=e=>{t.date=e},a=()=>t.date;return{init:n,setDate:c,getDate:a,getFilterFormat:e=>{const o=JSON.stringify(e.getFullYear()).slice(2,4),r=(e.getMonth()+1).toString().length===1?`0${e.getMonth()+1}`:e.getMonth()+1,g=e.getDate().toString().length===1?`0${e.getDate()}`:e.getDate();return r+"/"+g+"/"+o},getLeagueFormat:(e,o=!0)=>{const r=e.getFullYear(),g=(e.getMonth()+1).toString().length===1?`0${e.getMonth()+1}`:e.getMonth()+1,D=e.getDate().toString().length===1?`0${e.getDate()}`:e.getDate(),l=e.getDay(),u=["SUN","MON","TUE","WED","THU","FRI","SAT"];return g+"/"+D+"/"+r+", "+u[l]+(o?` // ${e.toString()}`:"")},getFromDate:()=>(console.log("opt.date: ",t.date,a(),a().getUTCDate()),s.getWithOutMillisecond(a().getTime()))}});export{s as U,T as u};
