import{D as p,h as u,aD as _,E as v,m as d}from"./HWlaNmGq.js";import{u as L}from"./D8-kOS9n.js";const I=p("liveIntervalLoadingStore",()=>{const t=u({sport:"football",isOnLiveTab:!1,isPending:!1,termDuration:1e4,realTimeData:[],timeOutInstance:void 0}),m=u({cnt:0}),o=async()=>{if(!t.isOnLiveTab)return;t.isPending=!0,m.cnt++;const a=await _(`${d[t.sport]}RealTime`,{method:"POST"},{sid:v[d.football],fromdate:L().getFromDate()});console.log("cnt, res from interval loading: ",m.cnt,a),t.realTimeData=a.data.data.data,t.isPending=!1,t.timeOutInstance=setTimeout(async()=>{t.isOnLiveTab&&await o()},t.termDuration)},l=async a=>{t.isOnLiveTab=!0,t.sport=a,await o()},f=()=>{r(!1)},T=async a=>{r(a==="live"),t.isOnLiveTab&&await o()},r=a=>{t.isOnLiveTab=a,a===!1&&(clearTimeout(t.timeOutInstance),t.timeOutInstance=void 0)};return{onMounted:l,onBeforeUnmount:f,changeTab:T,setTabActive:r,updateLiveRealTime:a=>{const e=[...a];return t.realTimeData.map(i=>{const{match_id:s}=i,n=e.findIndex(c=>c.match_id===s);n<0||(e[n].ai_away_scores=i.ai_away_scores,e[n].ai_home_scores=i.ai_home_scores,e[n].ai_status_id=i.ai_match_status)}),e},updateLiveKickOff:a=>{const e=[];return t.realTimeData.map(i=>{const{match_id:s}=i,n=a.findIndex(c=>c.match_id===s);n<0||e.push({idx:n,match_id:s,ai_kickoff_timestamp:i.ai_kickoff_timestamp})}),e},getRealTimeData:()=>t.realTimeData}});export{I as u};
