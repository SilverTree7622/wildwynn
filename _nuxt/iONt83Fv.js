import{_ as A,a as z,b as U,c as V,d as q}from"./WsAPOJMl.js";import{d as L,o as y,n as v,a as e,c as m,b as M,F as k,r as P,e as a,_ as j,u as G,f as W,g as X,h as S,i as Y,w as H,j as n,k as h,E as J}from"./HWlaNmGq.js";import{_ as K}from"./DYpi-7xu.js";import{u as Q}from"./CqwcMvo5.js";import{u as Z}from"./D8-kOS9n.js";import{u as tt}from"./BM7wdmhm.js";import"./DsC-aGP2.js";import"./BE-x0AQ0.js";const et={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},st={class:"leagueFrame"},nt=L({__name:"LiveMain",props:{result_league_list:{}},setup(r){const i=r;return y(async()=>{await v()}),(u,g)=>{const _=A;return e(),m("div",et,[M("div",st,[(e(!0),m(k,null,P(i.result_league_list,(s,l)=>(e(),a(_,{idx:l,league:s},null,8,["idx","league"]))),256))])])}}}),ot={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},at={class:"leagueFrame"},it=L({__name:"FixturesMain",props:{result_league_list:{}},setup(r){const i=r;return y(async()=>{await v()}),(u,g)=>{const _=z;return e(),m("div",ot,[M("div",at,[(e(!0),m(k,null,P(i.result_league_list,(s,l)=>(e(),a(_,{idx:l,league:s},null,8,["idx","league"]))),256))])])}}}),lt={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},rt={class:"leagueFrame"},ut=L({__name:"OddsMain",props:{result_league_list:{}},setup(r){const i=r,u=g=>g===i.result_league_list.length-1;return(g,_)=>{const s=U;return e(),m("div",lt,[M("div",rt,[(e(!0),m(k,null,P(i.result_league_list,(l,x)=>(e(),a(s,{idx:x,isLast:u(x),league:l},null,8,["idx","isLast","league"]))),256))])])}}}),_t={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},ct={class:"leagueFrame"},dt=L({__name:"ResultMain",props:{result_league_list:{}},setup(r){const i=r;return y(async()=>{await v()}),(u,g)=>{const _=V;return e(),m("div",_t,[M("div",ct,[(e(!0),m(k,null,P(i.result_league_list,(s,l)=>(e(),a(_,{idx:l,league:s},null,8,["idx","league"]))),256))])])}}}),gt={};function mt(r,i){const u=q;return e(),a(u)}const pt=j(gt,[["render",mt]]),St=L({__name:"index",setup(r){const{ONE_DAY_MILLISECOND:i,MAX_PAGINATION_CONTENT:u}=G().public.CONSTANTS,g=Q(),_=Z(),s=tt(),l=W(),x=X(),O=S({key:"tab"}),t=S({isBooting:!0,isPending:!0,tab:x.query.tab??"live",isOutOfContent:s.getIsOutOfContent(O.key)??!1,result:{nav_code:"S004"}}),o=S({totalList:[],sortedList:[]}),c=S({isPending:!1,idx:0}),$=()=>{g.init(),s.setScroll2Top(),c.idx=0,o.sortedList=[],s.setIsOutOfContent(O.key,!1)},N=async()=>{t.tab=x.query.tab,o.totalList=[],t.isBooting=!0,t.isPending=!0,$(),await w()},T=async()=>{t.isBooting||($(),t.isPending=!0,await B(),t.isPending=!1)},F=async()=>{await B(!0)},w=async()=>{const p=await l.onMountedTab("baseball",t.tab,"fixtures",{sid:J.BaseBall,fromdate:_.getDate().getTime()});o.totalList=p.data.Body,await B(),t.isPending=!1,t.isBooting=!1},I=async(p,d)=>{if(d.length===0)return d;if(p)return d.slice(0,u*c.idx);if(d.length<c.idx)return d;c.idx!==0&&(c.isPending=!0),c.idx++;const b=d.slice(0,u*c.idx);return c.isPending=!1,b},B=async(p=!1)=>{const d=t.tab==="odds"||t.tab==="league",b=t.tab==="result",f=g.sortList(o.totalList,_.getDate(),{isWholeDate:d,isResult:b,date:C=>new Date(C.Fixture.StartDate),league:C=>C.Fixture.League.Id});return f.length===o.sortedList.length&&f.length!==0?(p&&(o.sortedList=f),t.isOutOfContent=!0,t.isOutOfContent):(o.sortedList=await I(p,f),t.isOutOfContent=f.length===o.sortedList.length,t.isOutOfContent)};return y(async()=>{t.isPending=!0,await v(),s.setScroll2Top(),await w(),s.register(O.key,B)}),Y(async()=>{$(),s.onBeforeUnmount(O.key),l.onBeforeUnmountTab()}),(p,d)=>{const b=nt,f=it,C=ut,R=dt,D=pt,E=K;return e(),a(E,{name:"tabcontent",isPending:n(t).isPending,pageIsPending:n(c).isPending,isOutOfContent:n(t).isOutOfContent,sName:"BaseBall",tab:n(t).tab,result:n(t).result,changeTab:N,changeDate:T,toggleByTime:F},{default:H(()=>[n(t).tab==="live"?(e(),a(b,{key:0,result_league_list:n(o).sortedList},null,8,["result_league_list"])):h("",!0),n(t).tab==="fixtures"?(e(),a(f,{key:1,result_league_list:n(o).sortedList},null,8,["result_league_list"])):h("",!0),n(t).tab==="odds"?(e(),a(C,{key:2,result_league_list:n(o).sortedList},null,8,["result_league_list"])):h("",!0),n(t).tab==="result"?(e(),a(R,{key:3,result_league_list:n(o).sortedList},null,8,["result_league_list"])):h("",!0),n(t).tab==="league"?(e(),a(D,{key:4})):h("",!0)]),_:1},8,["isPending","pageIsPending","isOutOfContent","tab","result"])}}});export{St as default};
