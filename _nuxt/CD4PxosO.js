import{_ as V,a as D,b as E,c as A,d as z,E as U}from"./DHQWuoL4.js";import{d as h,o as v,n as B,a as e,c as p,b as M,F as P,r as k,e as a,_ as q,u as j,f as G,g as W,h as S,w as $,i as X,j as Y,k as s,l as C}from"./AXEMsDeV.js";import{_ as H}from"./ClLSF4BM.js";import{u as J,a as K}from"./BIWJqI28.js";import{u as Q}from"./BUFl95DF.js";import"./DWkv6aNB.js";import"./DFS-EtyP.js";import"./D1191Wql.js";import"./CBrtR3aG.js";const Z={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},tt={class:"leagueFrame"},et=h({__name:"LiveMain",props:{result_league_list:{}},setup(_){const l=_;return v(async()=>{await B()}),(c,d)=>{const i=V;return e(),p("div",Z,[M("div",tt,[(e(!0),p(P,null,k(l.result_league_list,(n,r)=>(e(),a(i,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),nt={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},st={class:"leagueFrame"},ot=h({__name:"FixturesMain",props:{result_league_list:{}},setup(_){const l=_;return v(async()=>{await B()}),(c,d)=>{const i=D;return e(),p("div",nt,[M("div",st,[(e(!0),p(P,null,k(l.result_league_list,(n,r)=>(e(),a(i,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),at={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},lt={class:"leagueFrame"},it=h({__name:"OddsMain",props:{result_league_list:{}},setup(_){const l=_,c=d=>d===l.result_league_list.length-1;return(d,i)=>{const n=E;return e(),p("div",at,[M("div",lt,[(e(!0),p(P,null,k(l.result_league_list,(r,x)=>(e(),a(n,{idx:x,isLast:c(x),league:r},null,8,["idx","isLast","league"]))),256))])])}}}),rt={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},ut={class:"leagueFrame"},_t=h({__name:"ResultMain",props:{result_league_list:{}},setup(_){const l=_;return v(async()=>{await B()}),(c,d)=>{const i=A;return e(),p("div",rt,[M("div",ut,[(e(!0),p(P,null,k(l.result_league_list,(n,r)=>(e(),a(i,{idx:r,league:n},null,8,["idx","league"]))),256))])])}}}),ct={};function dt(_,l){const c=z;return e(),a(c)}const gt=q(ct,[["render",dt]]),Ot=h({__name:"index",setup(_){const{ONE_DAY_MILLISECOND:l,MAX_PAGINATION_CONTENT:c}=j().public.CONSTANTS,d=J(),i=K(),n=Q(),r=G(),x=W(),L=S({key:"tab"}),t=S({isBooting:!0,isPending:!0,tab:x.query.tab??"live",isOutOfContent:n.getIsOutOfContent(L.key)??!1,result:{nav_code:"S005"}}),o=S({totalList:[],sortedList:[]}),g=S({isPending:!1,idx:0});$(()=>x.fullPath,async u=>{t.tab=x.query.tab,o.totalList=[],t.isBooting=!0,t.isPending=!0,w(),await N()}),$(()=>i.getDate(),async u=>{t.isBooting||(w(),t.isPending=!0,await O(),t.isPending=!1)}),$(()=>d.getTimeIsToggled(),async u=>{await O(!0)});const w=()=>{d.init(),n.setScroll2Top(),g.idx=0,o.sortedList=[],n.setIsOutOfContent(L.key,!1)},N=async()=>{const u=await r.onMountedTab("volleyball",t.tab,"fixtures",{sid:U.VolleyBall,fromdate:i.getDate().getTime()});o.totalList=u.data.Body,await O(),t.isPending=!1,t.isBooting=!1},T=async(u,m)=>{if(m.length===0)return m;if(u)return m.slice(0,c*g.idx);if(m.length<g.idx)return m;g.idx!==0&&(g.isPending=!0),g.idx++;const y=m.slice(0,c*g.idx);return g.isPending=!1,y},O=async(u=!1)=>{const m=t.tab==="odds"||t.tab==="league",y=t.tab==="result",f=d.sortList(o.totalList,i.getDate(),{isWholeDate:m,isResult:y,date:b=>new Date(b.Fixture.StartDate),league:b=>b.Fixture.League.Id});return f.length===o.sortedList.length&&f.length!==0?(u&&(o.sortedList=f),t.isOutOfContent=!0,t.isOutOfContent):(o.sortedList=await T(u,f),t.isOutOfContent=f.length===o.sortedList.length,t.isOutOfContent)};return v(async()=>{t.isPending=!0,await B(),n.setScroll2Top(),await N(),n.register(L.key,O)}),X(async()=>{w(),n.onBeforeUnmount(L.key),r.onBeforeUnmountTab()}),(u,m)=>{const y=et,f=ot,b=it,F=_t,I=gt,R=H;return e(),a(R,{name:"tabcontent",isPending:s(t).isPending,pageIsPending:s(g).isPending,isOutOfContent:s(t).isOutOfContent,sName:"VolleyBall",tab:s(t).tab,result:s(t).result},{default:Y(()=>[s(t).tab==="live"?(e(),a(y,{key:0,result_league_list:s(o).sortedList},null,8,["result_league_list"])):C("",!0),s(t).tab==="fixtures"?(e(),a(f,{key:1,result_league_list:s(o).sortedList},null,8,["result_league_list"])):C("",!0),s(t).tab==="odds"?(e(),a(b,{key:2,result_league_list:s(o).sortedList},null,8,["result_league_list"])):C("",!0),s(t).tab==="result"?(e(),a(F,{key:3,result_league_list:s(o).sortedList},null,8,["result_league_list"])):C("",!0),s(t).tab==="league"?(e(),a(I,{key:4})):C("",!0)]),_:1},8,["isPending","pageIsPending","isOutOfContent","tab","result"])}}});export{Ot as default};
