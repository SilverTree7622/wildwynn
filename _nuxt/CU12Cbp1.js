import{u as k}from"./QsnRanEn.js";import{u as S,_ as B,a as C,b as V,c as z,d as j,e as q,f as K,g as Y,h as Z,i as W,j as J,k as X,l as H}from"./pxo9Xusx.js";import{_ as w,a as F}from"./BsXwNNX1.js";import{d as L,o as l,c as i,a as s,F as y,r as O,u as a,t as f,b as P,_ as Q,e as ee,f as te,g as E,w as T,h as se,n as ae,i as le,j as x,k as ne,l as b}from"./CEF1cY5l.js";import{_ as ie}from"./DNns2mav.js";import{u as oe}from"./vPuIu8-7.js";import{u as re}from"./CFuMYob7.js";const ce={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},de={class:"leagueFrame"},_e=s("div",{class:"rectangle-28-lE9kB9 rectangle-28"},null,-1),ge=s("img",{class:"flag_-circle_eng",src:B,alt:"Flag_Circle_ENG"},null,-1),me={class:"premier-league-lE9kB9 premier-league headline2"},ue={key:1,class:"line-1",src:C,alt:"Line 1"},pe={style:{color:"black"}},ve=P('<div class="live-match-Jbo1mR live-match"><div class="group-5-AKR3e5 group-5"><img class="aston-villa-oDU2Nu aston-villa" src="'+w+'" alt="AstonVilla"><div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">ASTON VILLA</div></div><div class="score-AKR3e5 score"><img class="vector-eyBPRK vector" src="'+V+'" alt="Vector"><img class="vector-n1oFur vector" src="'+z+'" alt="Vector"><img class="vector-z3kuGS vector" src="'+j+'" alt="Vector"><div class="txt-live">LIVE</div><div class="x100new pretendard-semi-bold-black-12px"><span class="span0-TpclY9 body2">100</span><span class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span></div><div class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">000</div><div class="x000-n1oFur x000 pretendard-semi-bold-black-20px">000</div></div><div class="group-6-AKR3e5 group-6"><img class="arsenal-x4WW4Z arsenal" src="'+F+'" alt="Arsenal"><div class="arsenal-tGhDC5 valign-text-middle arsenal body2">ARSENAL</div></div></div><div class="btn_-favorite_-check"><div class="group-28"><img class="star" src="'+q+'" alt="Star"></div><div class="group-29-cDzWbx smart-layers-pointers"><img class="star" src="'+K+'" alt="Star"></div></div>',2),he={class:"live-tracker"},ye=s("img",{class:"btn_-live-tracker",src:Y,alt:"Btn_LiveTracker"},null,-1),fe=[ye],xe=L({__name:"LiveMain",props:{result_league:{}},setup(p){const g=p,m=k(),c=S(),u=r=>r.hasLeagueTag??!1;return(r,n)=>(l(),i("div",ce,[s("div",de,[(l(!0),i(y,null,O(g.result_league,(o,t)=>(l(),i(y,null,[u(o)?(l(),i("div",{key:0,class:"group-17",onClick:n[0]||(n[0]=_=>a(c).go_league("home")),style:{cursor:"pointer"}},[_e,ge,s("div",me,f(o.lg_name),1)])):(l(),i("img",ue)),s("div",pe,f(a(m).getLeagueFormat(o.date)),1),s("div",{class:"live_-match",onClick:n[2]||(n[2]=_=>a(c).go_matchup("home"))},[ve,s("div",he,[s("a",{href:"javascript:;",onClick:n[1]||(n[1]=_=>a(c).go_livetraker())},fe)])])],64))),256))])]))}}),be={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},ke={class:"leagueFrame"},Le=s("div",{class:"rectangle-28-lE9kB9 rectangle-28"},null,-1),$e=s("img",{class:"flag_-circle_eng",src:B,alt:"Flag_Circle_ENG"},null,-1),Ee={class:"premier-league-lE9kB9 premier-league headline2"},Se={key:1,class:"line-1",src:C,alt:"Line 1"},Be={style:{color:"black"}},Ce=P('<div class="live-match-Y6utjY live-match"><div class="group-5-Z7bohL group-5"><img class="aston-villa-1xcxXp aston-villa" src="'+w+'" alt="AstonVilla"><div class="aston-villa-O0Qend valign-text-middle aston-villa body2">ASTON VILLA</div></div><div class="vs-Z7bohL vs"><div class="x19-30 headline">19: 30</div><div class="vs-ij0TdP vs headline">VS</div></div><div class="group-6-Z7bohL group-6"><img class="arsenal-xEfJsb arsenal" src="'+F+'" alt="Arsenal"><div class="arsenal-ex9GAr valign-text-middle arsenal body2">ARSENAL</div></div><div class="frame-303-Z7bohL frame-303"><img class="btn_-round-square2-qGs8vj btn_-round-square2" src="'+Z+'" alt="Btn_RoundSquare2"><div class="matchup valign-text-middle body2">MATCHUP</div></div></div><div class="btn_-favorite_-check"><div class="group-28"><img class="star" src="'+W+'" alt="Star"></div><div class="group-29-rplUIj smart-layers-pointers"><img class="star" src="'+J+'" alt="Star"></div></div>',2),Oe=[Ce],Ae=L({__name:"FixturesMain",props:{result_league:{}},setup(p){const g=p,m=k(),c=S(),u=r=>r.hasLeagueTag??!1;return(r,n)=>(l(),i("div",be,[s("div",ke,[(l(!0),i(y,null,O(g.result_league,o=>(l(),i(y,null,[u(o)?(l(),i("div",{key:0,class:"group-17",onClick:n[0]||(n[0]=t=>a(c).go_league()),style:{cursor:"pointer"}},[Le,$e,s("div",Ee,f(o.lg_name),1)])):(l(),i("img",Se)),s("div",Be,f(a(m).getLeagueFormat(o.date)),1),s("div",{class:"live_-match",onClick:n[1]||(n[1]=t=>a(c).go_matchup("home"))},Oe)],64))),256))])]))}}),Re={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},Te={class:"leagueFrame"},Pe=s("div",{class:"rectangle-28-lE9kB9 rectangle-28"},null,-1),Ne=s("img",{class:"flag_-circle_eng",src:B,alt:"Flag_Circle_ENG"},null,-1),Me={class:"premier-league-lE9kB9 premier-league headline2"},we={key:1,class:"line-1",src:C,alt:"Line 1"},Fe={style:{color:"black"}},Ge={class:"live_-match"},Ie={style:{width:"100%","text-align":"center"}},De=L({__name:"OddsMain",props:{result_league:{}},setup(p){const g=p,m=k(),c=S(),u=r=>r.hasLeagueTag??!1;return(r,n)=>(l(),i("div",Re,[s("div",Te,[(l(!0),i(y,null,O(g.result_league,o=>(l(),i(y,null,[u(o)?(l(),i("div",{key:0,class:"group-17",onClick:n[0]||(n[0]=t=>a(c).go_league()),style:{cursor:"pointer"}},[Pe,Ne,s("div",Me,f(o.lg_name),1)])):(l(),i("img",we)),s("div",Fe,f(a(m).getLeagueFormat(o.date)),1),s("div",Ge,[s("div",Ie,[s("img",{src:X,style:{height:"155px","margin-left":"auto","margin-right":"auto"},onClick:n[1]||(n[1]=t=>a(c).go_matchup("home"))})])])],64))),256))])]))}}),Ue={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},Ve={class:"leagueFrame"},ze=s("div",{class:"rectangle-28-lE9kB9 rectangle-28"},null,-1),je=s("img",{class:"flag_-circle_eng",src:B,alt:"Flag_Circle_ENG"},null,-1),qe={class:"premier-league-lE9kB9 premier-league headline2"},Ke={key:1,class:"line-1",src:C,alt:"Line 1"},Ye={style:{color:"black"}},Ze={class:"live_-match"},We={style:{width:"100%","text-align":"center"}},Je=L({__name:"ResultMain",props:{result_league:{}},setup(p){const g=p,m=k(),c=S(),u=r=>r.hasLeagueTag??!1;return(r,n)=>(l(),i("div",Ue,[s("div",Ve,[(l(!0),i(y,null,O(g.result_league,o=>(l(),i(y,null,[u(o)?(l(),i("div",{key:0,class:"group-17",onClick:n[0]||(n[0]=t=>a(c).go_league()),style:{cursor:"pointer"}},[ze,je,s("div",qe,f(o.lg_name),1)])):(l(),i("img",Ke)),s("div",Ye,f(a(m).getLeagueFormat(o.date)),1),s("div",Ze,[s("div",We,[s("img",{src:H,style:{height:"120px","margin-left":"auto","margin-right":"auto"},onClick:n[1]||(n[1]=t=>a(c).go_matchup("home"))})])])],64))),256))])]))}}),Xe={},He={class:"contents_-football_-live-Mzx5SR",id:"contents_-football_-live"},Qe=P('<div class="leagueFrame"><div class="group-17"><div class="rectangle-28-lE9kB9 rectangle-28"></div><div class="premier-league-lE9kB9 premier-league headline2">BEST LEAGUE</div></div><div class="live_-match"><ul><li style="line-height:23px;font-size:20px;margin-top:10px;margin-bottom:10px;color:black;display:flex;"><img src="https://temp-sports.wildwynn.com/img/flag-circle-eng@2x.png" style="height:25px;vertical-align:bottom;"> PREMIER LEAGUE </li><li style="line-height:23px;font-size:20px;margin-top:10px;margin-bottom:10px;color:black;display:flex;"><img src="https://temp-sports.wildwynn.com/img/flag-circle-eng@2x.png" style="height:25px;vertical-align:bottom;"> PREMIER LEAGUE </li></ul></div><div class="group-17"><div class="rectangle-28-lE9kB9 rectangle-28"></div><div class="premier-league-lE9kB9 premier-league headline2">POPULAR COUNTRIES</div></div><div class="live_-match"><ul><li style="line-height:23px;font-size:20px;margin-top:10px;margin-bottom:10px;color:black;display:flex;"><img src="https://temp-sports.wildwynn.com/img/flag-circle-eng@2x.png" style="height:25px;vertical-align:bottom;"> PREMIER LEAGUE </li><li style="line-height:23px;font-size:20px;margin-top:10px;margin-bottom:10px;color:black;display:flex;"><img src="https://temp-sports.wildwynn.com/img/flag-circle-eng@2x.png" style="height:25px;vertical-align:bottom;"> PREMIER LEAGUE </li></ul></div></div>',1),et=[Qe];function tt(p,g){return l(),i("div",He,et)}const st=Q(Xe,[["render",tt]]),dt=L({__name:"index",setup(p){const{ONE_DAY_MILLISECOND:g,MAX_PAGINATION_CONTENT:m}=ee().public.CONSTANTS,c=oe(),u=k(),r=re(),n=te(),o=E({key:"tab"}),t=E({isBooting:!0,isPending:!0,tab:n.query.tab??"live",result:{nav_code:"S004",sName:"dummy_sName",league:[]},isOutOfContent:r.getIsOutOfContent(o.key)??!1}),_=E({sortedLeagueList:[]}),v=E({isPending:!1,idx:0});T(()=>n.fullPath,async e=>{t.tab=n.query.tab,t.result.league=[],t.isBooting=!0,t.isPending=!0,A(),await N()}),T(()=>u.getDate(),async e=>{t.isBooting||(A(),t.isPending=!0,await $(),t.isPending=!1)}),T(()=>c.getTimeIsToggled(),async e=>{await $(!0)});const A=()=>{c.init(),r.setScroll2Top(),v.idx=0,_.sortedLeagueList=[],r.setIsOutOfContent(o.key,!1)},N=async()=>{setTimeout(async()=>{const e=d=>{const h=new Date(new Date().getTime()-d*g);return h.setTime(h.getTime()+Math.random()*5*60*1e3),h};t.result.league.push({lg_name:"dummy_lg_name1",date:e(0)},{lg_name:"dummy_lg_name1",date:e(0)},{lg_name:"dummy_lg_name1",date:e(0)},{lg_name:"dummy_lg_name2",date:e(0)},{lg_name:"dummy_lg_name2",date:e(0)},{lg_name:"dummy_lg_name2",date:e(0)},{lg_name:"dummy_lg_name3",date:e(0)},{lg_name:"dummy_lg_name3",date:e(0)},{lg_name:"dummy_lg_name3",date:e(0)},{lg_name:"dummy_lg_name4",date:e(0)},{lg_name:"dummy_lg_name4",date:e(0)},{lg_name:"dummy_lg_name4",date:e(0)},{lg_name:"dummy_lg_name5",date:e(0)},{lg_name:"dummy_lg_name5",date:e(0)},{lg_name:"dummy_lg_name5",date:e(0)},{lg_name:"dummy_lg_name6",date:e(0)},{lg_name:"dummy_lg_name6",date:e(0)},{lg_name:"dummy_lg_name6",date:e(0)},{lg_name:"dummy_lg_name7",date:e(1)},{lg_name:"dummy_lg_name7",date:e(1)},{lg_name:"dummy_lg_name7",date:e(1)},{lg_name:"dummy_lg_name8",date:e(1)},{lg_name:"dummy_lg_name8",date:e(1)},{lg_name:"dummy_lg_name8",date:e(1)}),await $(),t.isPending=!1,t.isBooting=!1},Math.random()*1*1e3)},G=async(e,d)=>d.length===0?d:e?d.slice(0,m*v.idx):d.length<v.idx?d:(v.idx!==0&&(v.isPending=!0),v.idx++,new Promise((h,M)=>{setTimeout(()=>{const R=d.slice(0,m*v.idx);h(R),v.isPending=!1},(Math.random()+1)*1*1e3)}).then(h=>h)),$=async(e=!1)=>{const d=c.sortList(t.result.league,u.getDate());return d.length===_.sortedLeagueList.length&&d.length!==0?(e&&(_.sortedLeagueList=d),t.isOutOfContent=!0,t.isOutOfContent):(_.sortedLeagueList=await G(e,d),t.isOutOfContent=d.length===_.sortedLeagueList.length,t.isOutOfContent)};return se(async()=>{t.isPending=!0,await ae(),r.setScroll2Top(),await N(),r.register(o.key,$)}),le(async()=>{A(),c.init(),r.onBeforeUnmount(o.key)}),(e,d)=>{const h=xe,M=Ae,R=De,I=Je,D=st,U=ie;return l(),x(U,{name:"tabcontent",isPending:a(t).isPending,pageIsPending:a(v).isPending,isOutOfContent:a(t).isOutOfContent,sName:"BaseBall",tab:a(t).tab,result:a(t).result},{default:ne(()=>[a(t).tab==="live"?(l(),x(h,{key:0,result_league:a(_).sortedLeagueList},null,8,["result_league"])):b("",!0),a(t).tab==="fixtures"?(l(),x(M,{key:1,result_league:a(_).sortedLeagueList},null,8,["result_league"])):b("",!0),a(t).tab==="odds"?(l(),x(R,{key:2,result_league:a(_).sortedLeagueList},null,8,["result_league"])):b("",!0),a(t).tab==="result"?(l(),x(I,{key:3,result_league:a(_).sortedLeagueList},null,8,["result_league"])):b("",!0),a(t).tab==="league"?(l(),x(D,{key:4})):b("",!0)]),_:1},8,["isPending","pageIsPending","isOutOfContent","tab","result"])}}});export{dt as default};