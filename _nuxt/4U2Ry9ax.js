import{av as l,aw as o,_ as d,d as r,ax as p,ay as i,H as _,aD as m,aE as f,o as c,c as u,Q as g,x as n,a as x}from"./CEF1cY5l.js";const k={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},b=l(o.ui.strategy,o.ui.skeleton,k),h=r({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:t}=p("skeleton",i(e,"ui"),b),a=_(()=>m(f(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:t,skeletonClass:a}}});function y(e,s,t,a,$,B){return c(),u("div",g({class:e.skeletonClass},e.attrs),null,16)}const v=d(h,[["render",y]]),w={class:"flex items-center space-x-4 w-[315px] mx-auto mt-[2px] mb-[50px]"},C={class:"space-y-2"},j=r({__name:"Skeleton",setup(e){return(s,t)=>{const a=v;return c(),u("div",w,[n(a,{class:"h-12 w-12",ui:{rounded:"rounded-full"}}),x("div",C,[n(a,{class:"h-4 w-[250px]"}),n(a,{class:"h-4 w-[200px]"})])])}}});export{j as _};