import{_ as H,a as A,b as z,c as U,d as V}from"./WsAPOJMl.js";import{d as C,o as k,n as v,a as e,c as m,b as I,F as M,r as P,e as a,_ as q,u as j,f as G,g as W,h as S,i as X,w as Y,j as s,k as h,E as J}from"./HWlaNmGq.js";import{_ as K}from"./DYpi-7xu.js";import{u as Q}from"./CqwcMvo5.js";import{u as Z}from"./D8-kOS9n.js";import{u as tt}from"./BM7wdmhm.js";import"./DsC-aGP2.js";import"./BE-x0AQ0.js";const et={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},nt={class:"leagueFrame"},st=C({__name:"LiveMain",props:{result_league_list:{}},setup(l){const i=l;return k(async()=>{await v()}),(c,g)=>{const u=H;return e(),m("div",et,[I("div",nt,[(e(!0),m(M,null,P(i.result_league_list,(n,r)=>(e(),a(u,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),ot={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},at={class:"leagueFrame"},it=C({__name:"FixturesMain",props:{result_league_list:{}},setup(l){const i=l;return k(async()=>{await v()}),(c,g)=>{const u=A;return e(),m("div",ot,[I("div",at,[(e(!0),m(M,null,P(i.result_league_list,(n,r)=>(e(),a(u,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),rt={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},lt={class:"leagueFrame"},ct=C({__name:"OddsMain",props:{result_league_list:{}},setup(l){const i=l,c=g=>g===i.result_league_list.length-1;return(g,u)=>{const n=z;return e(),m("div",rt,[I("div",lt,[(e(!0),m(M,null,P(i.result_league_list,(r,x)=>(e(),a(n,{idx:x,isLast:c(x),league:r},null,8,["idx","isLast","league"]))),256))])])}}}),ut={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},_t={class:"leagueFrame"},dt=C({__name:"ResultMain",props:{result_league_list:{}},setup(l){const i=l;return k(async()=>{await v()}),(c,g)=>{const u=U;return e(),m("div",ut,[I("div",_t,[(e(!0),m(M,null,P(i.result_league_list,(n,r)=>(e(),a(u,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),gt={};function mt(l,i){const c=V;return e(),a(c)}const pt=q(gt,[["render",mt]]),St=C({__name:"index",setup(l){const{ONE_DAY_MILLISECOND:i,MAX_PAGINATION_CONTENT:c}=j().public.CONSTANTS,g=Q(),u=Z(),n=tt(),r=G(),x=W(),L=S({key:"tab"}),t=S({isBooting:!0,isPending:!0,tab:x.query.tab??"live",isOutOfContent:n.getIsOutOfContent(L.key)??!1,result:{nav_code:"S007"}}),o=S({totalList:[],sortedList:[]}),_=S({isPending:!1,idx:0}),$=()=>{g.init(),n.setScroll2Top(),_.idx=0,o.sortedList=[],n.setIsOutOfContent(L.key,!1)},B=async()=>{t.tab=x.query.tab,o.totalList=[],t.isBooting=!0,t.isPending=!0,$(),await w()},N=async()=>{t.isBooting||($(),t.isPending=!0,await O(),t.isPending=!1)},T=async()=>{await O(!0)},w=async()=>{const p=await r.onMountedTab("icehockey",t.tab,"fixtures",{sid:J.Icehockey,fromdate:u.getDate().getTime()});o.totalList=p.data.Body,await O(),t.isPending=!1,t.isBooting=!1},F=async(p,d)=>{if(d.length===0)return d;if(p)return d.slice(0,c*_.idx);if(d.length<_.idx)return d;_.idx!==0&&(_.isPending=!0),_.idx++;const y=d.slice(0,c*_.idx);return _.isPending=!1,y},O=async(p=!1)=>{const d=t.tab==="odds"||t.tab==="league",y=t.tab==="result",f=g.sortList(o.totalList,u.getDate(),{isWholeDate:d,isResult:y,date:b=>new Date(b.Fixture.StartDate),league:b=>b.Fixture.League.Id});return f.length===o.sortedList.length&&f.length!==0?(p&&(o.sortedList=f),t.isOutOfContent=!0,t.isOutOfContent):(o.sortedList=await F(p,f),t.isOutOfContent=f.length===o.sortedList.length,t.isOutOfContent)};return k(async()=>{t.isPending=!0,await v(),n.setScroll2Top(),await w(),n.register(L.key,O)}),X(async()=>{$(),n.onBeforeUnmount(L.key),r.onBeforeUnmountTab()}),(p,d)=>{const y=st,f=it,b=ct,R=dt,D=pt,E=K;return e(),a(E,{name:"tabcontent",isPending:s(t).isPending,pageIsPending:s(_).isPending,isOutOfContent:s(t).isOutOfContent,sName:"IceHockey",tab:s(t).tab,result:s(t).result,changeTab:B,changeDate:N,toggleByTime:T},{default:Y(()=>[s(t).tab==="live"?(e(),a(y,{key:0,result_league_list:s(o).sortedList},null,8,["result_league_list"])):h("",!0),s(t).tab==="fixtures"?(e(),a(f,{key:1,result_league_list:s(o).sortedList},null,8,["result_league_list"])):h("",!0),s(t).tab==="odds"?(e(),a(b,{key:2,result_league_list:s(o).sortedList},null,8,["result_league_list"])):h("",!0),s(t).tab==="result"?(e(),a(R,{key:3,result_league_list:s(o).sortedList},null,8,["result_league_list"])):h("",!0),s(t).tab==="league"?(e(),a(D,{key:4})):h("",!0)]),_:1},8,["isPending","pageIsPending","isOutOfContent","tab","result"])}}});export{St as default};
