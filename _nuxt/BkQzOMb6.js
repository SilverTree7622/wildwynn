import{d as m,V as f,J as d,y as a,o as I,c as x,O as v,_}from"./QcXZs1tA.js";import{r as S}from"./BQkc-AXV.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({efdb04fa:p.value}));const t=d(),o=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=a(()=>S(l.value)),p=a(()=>{var s,r;const e=(r=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(I(),x("span",{style:v({width:i.value,height:i.value})},null,4))}}),h=_(y,[["__scopeId","data-v-41e8d397"]]);export{h as default};
