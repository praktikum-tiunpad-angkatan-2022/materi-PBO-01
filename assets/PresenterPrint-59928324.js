import{d as _,u as d,a as h,c as m,b as p,e as n,f as t,t as a,g as s,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as P}from"./index-a755c7af.js";import{N as w}from"./NoteDisplay-5f5756ab.js";const B={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(s(N))},[t("div",B,[t("div",V,[t("h1",L,a(s(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(x)),1),y(" "+a(e==null?void 0:e.title)+" ",1),j])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),A=P(C,[["__file","/home/runner/work/materi-PBO-01/materi-PBO-01/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
