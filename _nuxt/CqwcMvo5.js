import{D as v,h as a}from"./HWlaNmGq.js";const I=v("filterStore",()=>{const f=a({isToggled:!1,sortLogic:(n,e)=>n}),L=a({isToggled:!1,sortLogicTime:(n,e)=>{const r=(e==null?void 0:e.date)??(i=>i.date),g=(e==null?void 0:e.league)??(i=>i.lg_name),o=n.sort((i,d)=>r(i).getTime()-r(d).getTime());return o.forEach((i,d,s)=>(i.hasLeagueTag=d===0||g(s[d-1])!==g(i),i)),o},sortLogicDefault:(n,e)=>{const r=(e==null?void 0:e.date)??(s=>s.date),g=(e==null?void 0:e.league)??(s=>s.lg_name);n.map(s=>{s.hasLeagueTag=!1});const o=n.reduce((s,t)=>(s[g(t)]||(s[g(t)]=[]),s[g(t)].push(t),s),{}),i=Object.entries(o).map(s=>{const[t,S]=s,T=S;return T.sort((_,D)=>r(_).getTime()-r(D).getTime()),T.forEach((_,D)=>{_.hasLeagueTag=D===0}),{lg_name:t,matches:T}}),d=[];return i.map(s=>{d.push(...s.matches)}),d}}),p=a({sortLogic:(n,e,r)=>{const g=(r==null?void 0:r.date)??(i=>i.date);return n.filter((i,d)=>g(i).getFullYear()===e.getFullYear()&&g(i).getMonth()===e.getMonth()&&g(i).getDate()===e.getDate())}}),l=a({list:[],sortedList:[]}),u=(n,e)=>{const r=(e==null?void 0:e.isWholeDate)??!1,g=(e==null?void 0:e.isResult)??!1,o=(e==null?void 0:e.isLive)??!1,i=(e==null?void 0:e.date)??(t=>t.date),d=new Date(Date.now()).getTime();return n.filter(t=>r?!0:o?t.ai_status_id===2||t.ai_status_id===3||t.ai_status_id===4||t.ai_status_id===5||t.ai_status_id===6||t.ai_status_id===7:g?i(t).getTime()<d:i(t).getTime()>d)};return{init:()=>{f.isToggled=!1,L.isToggled=!1,l.list=[],l.sortedList=[]},toggle:()=>(L.isToggled=!L.isToggled,L.isToggled),sortList:(n,e,r)=>{if(l.list=n,r&&r.tab){const{tab:o}=r;r.isWholeDate=o==="odds"||o==="league",r.isLive=o==="live",r.isResult=o==="result"}const g=p.sortLogic(n,e,r);return l.sortedList=u(g,r),f.isToggled&&(l.sortedList=f.sortLogic(l.sortedList,r)),L.isToggled?l.sortedList=L.sortLogicTime(l.sortedList,r):l.sortedList=L.sortLogicDefault(l.sortedList,r),l.sortedList},getSortedList:()=>l.sortedList,getTimeIsToggled:()=>L.isToggled}});export{I as u};
