import{s as x,p as c,q as i,g as _}from"./QcXZs1tA.js";const E=x("goStore",()=>({go_matchup:o=>{o==="home"?c("/Matchup?tab=matchup"):c("/Matchup?tab=matchup")},go_league:o=>{o==="home"?c("/Matchup?tab=stats"):c("/Matchup?tab=stats")},go_livetraker:()=>{console.log("go livetraker")}})),v=i("/img/flag-circle-eng@2x.png"),P=i("/img/astonvilla.png"),H=i("/img/arsenal.png"),B=i("/img/btn-roundsquare2-2@2x.png"),I=i("/img/star-23@2x.png"),M=i("/img/star-24@2x.png"),G=i("/img/odds_temp_01.png"),L=i("/img/result_temp_01.png"),q=x("scrollStore",()=>{const s=_([]),u=(e,t,n)=>{s.length&&e in s.map(r=>r.key)||(s.push({key:e,target:n??window,isTargetCustom:!!n,callNextContentsPending:!1,isOutOfContent:!1,lastScroll:0,isBarExist:!1,callNextContents:t}),setTimeout(()=>{var g;const r=(g=o(e))==null?void 0:g.target;r&&r.addEventListener("scroll",()=>a(e)),setTimeout(()=>{C(e)},100)},1))},f=e=>{var r;const t=(r=o(e))==null?void 0:r.target;t&&t.removeEventListener("scroll",()=>a(e));const n=l(e);n<0||s.splice(n,1)},o=e=>{if(!s.length)return;const t=s.filter(n=>n.key===e);if(t.length)return t.pop()},l=e=>s.findIndex(t=>t.key===e),h=e=>{const t=o(e);if(!t)return;let n=document.documentElement.scrollTop||document.body.scrollTop;n>0&&t.lastScroll<=n,t.lastScroll=n},a=async e=>{const t=o(e);if(!t)return;h(e);let n=!1;if(t.isTargetCustom){const r=t.target.scrollHeight-t.target.scrollTop,m=t.target.offsetHeight-r;n=m>-1&&m!==0}else n=window.innerHeight+window.scrollY+1>=document.body.offsetHeight;n&&(t.callNextContentsPending||t.isOutOfContent||await p(e))},p=async e=>{const t=o(e);if(!t)return;t.callNextContentsPending=!0;const n=await t.callNextContents();d(e,n),t.callNextContentsPending=!1},C=e=>{const t=o(e);t&&(t.callNextContentsPending||(t.isTargetCustom?t.isBarExist=window.innerHeight!==document.body.clientHeight:t.isBarExist=t.target.clientHeight!==document.body.clientHeight))},d=(e,t)=>{const n=l(e);n<0||(s[n].isOutOfContent=t)};return{register:u,onBeforeUnmount:f,detectScrollEnd:a,setIsOutOfContent:d,callNextContents:p,showClick2GetNext:e=>{const t=o(e);t&&setTimeout(()=>!t.isBarExist&&!t.callNextContentsPending&&!t.isOutOfContent,100)},getIsOutOfContent:e=>{const t=o(e);if(t)return t.isOutOfContent},getCallNextContentsPending:e=>{const t=o(e);if(t)return t.callNextContentsPending},setScroll2Top:()=>{window.scrollTo(0,0)},init:e=>{const t=l(e);t<0||(s[t].callNextContentsPending=!1,s[t].isOutOfContent=!1,s[t].lastScroll=0,s[t].isBarExist=!1)}}});export{v as _,P as a,H as b,B as c,I as d,M as e,G as f,L as g,q as h,E as u};