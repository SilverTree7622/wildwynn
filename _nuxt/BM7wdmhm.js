import{D as h,h as f}from"./HWlaNmGq.js";const T=h("matchUpStore",()=>{const e=f({match_id:"",leagueName:"",timestamp:0,homeLogo:"",homeName:"",homeScore:0,awayLogo:"",awayName:"",awayScore:0,matchStatus:1});return{init:()=>{e.match_id="",e.matchStatus=1,e.leagueName="",e.timestamp=0,e.homeLogo="",e.homeName="",e.homeScore=0,e.awayLogo="",e.awayName="",e.awayScore=0},setConfig:s=>{e.match_id=s.match_id,e.matchStatus=s.matchStatus,e.leagueName=s.leagueName,e.timestamp=s.timestamp,e.homeLogo=s.homeLogo,e.homeName=s.homeName,e.homeScore=s.homeScore,e.awayLogo=s.awayLogo,e.awayName=s.awayName,e.awayScore=s.awayScore},getConfig:()=>e}}),E=h("scrollStore",()=>{const e=f([]),l=(o,t,n)=>{e.length&&o in e.map(a=>a.key)||(e.push({key:o,target:n??window,isTargetCustom:!!n,callNextContentsPending:!1,isOutOfContent:!1,lastScroll:0,isBarExist:!1,callNextContents:t}),setTimeout(()=>{var i;const a=(i=r(o))==null?void 0:i.target;a&&a.addEventListener("scroll",()=>c(o)),setTimeout(()=>{p(o)},100)},1))},u=o=>{var a;const t=(a=r(o))==null?void 0:a.target;t&&t.removeEventListener("scroll",()=>c(o));const n=s(o);n<0||e.splice(n,1)},r=o=>{if(!e.length)return;const t=e.filter(n=>n.key===o);if(t.length)return t.pop()},s=o=>e.findIndex(t=>t.key===o),S=o=>{const t=r(o);if(!t)return;let n=document.documentElement.scrollTop||document.body.scrollTop;n>0&&t.lastScroll<=n,t.lastScroll=n},c=async o=>{const t=r(o);if(!t)return;S(o);let n=!1;if(t.isTargetCustom){const a=t.target.scrollHeight-t.target.scrollTop,d=t.target.offsetHeight-a;n=d>-1&&d!==0}else n=window.innerHeight+window.scrollY+1>=document.body.offsetHeight;n&&(t.callNextContentsPending||t.isOutOfContent||await m(o))},m=async o=>{const t=r(o);if(!t)return;t.callNextContentsPending=!0;const n=await t.callNextContents();g(o,n),t.callNextContentsPending=!1},p=o=>{const t=r(o);t&&(t.callNextContentsPending||(t.isTargetCustom?t.isBarExist=window.innerHeight!==document.body.clientHeight:t.isBarExist=t.target.clientHeight!==document.body.clientHeight))},g=(o,t)=>{const n=s(o);n<0||(e[n].isOutOfContent=t)};return{register:l,onBeforeUnmount:u,detectScrollEnd:c,setIsOutOfContent:g,callNextContents:m,showClick2GetNext:o=>{const t=r(o);t&&setTimeout(()=>!t.isBarExist&&!t.callNextContentsPending&&!t.isOutOfContent,100)},getIsOutOfContent:o=>{const t=r(o);if(t)return t.isOutOfContent},getCallNextContentsPending:o=>{const t=r(o);if(t)return t.callNextContentsPending},setScroll2Top:()=>{window.scrollTo(0,0)},init:o=>{const t=s(o);t<0||(e[t].callNextContentsPending=!1,e[t].isOutOfContent=!1,e[t].lastScroll=0,e[t].isBarExist=!1)}}});export{T as a,E as u};
