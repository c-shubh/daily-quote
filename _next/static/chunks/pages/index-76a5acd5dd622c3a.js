(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3725:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5307)}])},5307:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var n=s(1527),r=s(7672),l=s.n(r),o=s(7416),c=s.n(o),i=s(959);s(352);var a=s(5424),d=s(6163);function u(e){return(0,n.jsx)("button",{type:"button",className:"block border rounded px-2",onClick:e.onClick,children:"left"==e.direction?(0,n.jsx)(d.YFh,{}):(0,n.jsx)(d.Tfp,{})})}var x=s(1801),h=s(9387);function f(e){let{date:t}=e,s=t.format("MMMM D"),[r,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{((0,h.z)()[s]||r)&&(0,h.h)(s,r)},[r]),(0,i.useEffect)(()=>{l(!!(0,h.z)()[s])},[s]),(0,n.jsx)("button",{className:"absolute right-16 top-0 bottom-0 flex items-center text-slate-400",onClick:()=>{l(!r)},children:r?(0,n.jsx)(x.kRm,{}):(0,n.jsx)(x.RrZ,{})})}var m=s(680),j=s(5048),p=s(4472),b=s(2514),N=s(2216),k=s(9767),y=s(8382),g=s(3873),v=s(9702),_=s(4832);function w(e){let{isOpen:t,onOpen:s,onClose:r}=(0,j.q)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button",className:"font-bold",onClick:s,children:e.date.format("D MMMM")}),(0,n.jsxs)(p.u_,{isOpen:t,onClose:r,size:"xs",children:[(0,n.jsx)(b.Z,{}),(0,n.jsxs)(N.h,{children:[(0,n.jsx)(k.x,{children:"Select Date"}),(0,n.jsx)(y.o,{}),(0,n.jsx)(g.f,{className:"",children:(0,n.jsx)(m._W,{mode:"single",selected:e.date.toDate(),onSelect:t=>e.setDate(l()(t)),onDayClick:r,className:"!m-0"})}),(0,n.jsx)(v.m,{children:(0,n.jsx)(_.z,{onClick:()=>{e.setDate(l()()),r()},children:"Today"})})]})]})]})}function S(){let{isOpen:e,onOpen:t,onClose:s}=(0,j.q)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button",className:"absolute right-5 top-0 bottom-0 flex items-center",onClick:t,children:(0,n.jsx)(x.Hfo,{className:"block w-5 h-5 text-slate-400"})}),(0,n.jsxs)(p.u_,{isOpen:e,onClose:s,size:"xs",children:[(0,n.jsx)(b.Z,{}),(0,n.jsxs)(N.h,{children:[(0,n.jsx)(k.x,{children:"Info"}),(0,n.jsx)(y.o,{}),(0,n.jsxs)(g.f,{className:"prose text-center",children:[(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://github.com/c-shubh/daily-quote",children:"Source code on GitHub"})}),(0,n.jsxs)("p",{children:["Quotes sourced from ",(0,n.jsx)("em",{children:"Daily Inspiration From The Monk Who Sold His Ferrari by Robin Sharma"})]}),(0,n.jsx)("p",{children:"Made with ❤ by Shubh A Chudasama"})]}),(0,n.jsx)(v.m,{})]})]})]})}var C=s(7444);async function M(e){let t=e.format("MMMM"),s=e.format("D"),n=await fetch("".concat("https://daily-quote-expressjs.onrender.com","/").concat(t,"/").concat(s));console.log(n);let r=await n.json();return r}function D(e){let[t,s]=(0,i.useState)(e.date||l()()),[r,o]=(0,i.useState)(),[d,x]=(0,i.useState)(!0),h=(0,i.useRef)(null),[m,j]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{(async function(){j(!1),x(!1),o(await M(t)),j(!0),x(!0)})()},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"Daily Quote"})}),(0,n.jsxs)("div",{className:"prose mx-6 py-6 flex flex-col space-y-4 h-full sm:mx-auto",children:[(0,n.jsx)(C.Z,{}),(0,n.jsxs)("h2",{className:"relative text-center border rounded-lg p-2 m-0",children:["Daily Quote",(0,n.jsx)(f,{date:t}),(0,n.jsx)(S,{})]}),(0,n.jsxs)("div",{className:"border rounded-lg flex justify-between p-2",children:[(0,n.jsx)(u,{direction:"left",onClick:()=>void s(t.subtract(1,"day"))}),(0,n.jsx)(w,{date:t,setDate:e=>s(l()(e))}),(0,n.jsx)(u,{direction:"right",onClick:()=>void s(t.add(1,"day"))})]}),(0,n.jsxs)("div",{className:"border rounded-lg p-4 flex-grow-1 h-fit overflow-auto",children:[(0,n.jsx)("div",{className:"".concat(m?"hidden":""," text-center"),children:"Loading..."}),r&&(0,n.jsx)(a.Z,{nodeRef:h,timeout:250,classNames:"fade",in:d,appear:!0,unmountOnExit:!0,children:(0,n.jsxs)("div",{ref:h,className:"bg-white z-10",children:[(0,n.jsx)("h4",{className:"mt-0 text-center",children:null==r?void 0:r.topic}),(0,n.jsx)("p",{className:"mb-0",children:null==r?void 0:r.text})]})},null==r?void 0:r._id)]})]})]})}},9387:function(e,t,s){"use strict";s.d(t,{h:function(){return r},z:function(){return l}});let n="bookmarks";function r(e,t){let s=l();s[e]=t,localStorage.setItem(n,JSON.stringify(s))}function l(){let e=localStorage.getItem(n);return null!==e?JSON.parse(e):{}}},7444:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(1527),r=s(5571),l=s(9129),o=s.n(l);let c=[{title:"Home",href:"/"},{title:"Bookmarks",href:"/bookmarks"}];function i(){return(0,n.jsx)("div",{className:"space-x-4",children:c.map(e=>(0,n.jsx)(r.r,{as:o(),href:e.href,children:(0,n.jsx)("span",{className:"underline text-blue-700",children:e.title})},e.href))})}}},function(e){e.O(0,[84,808,201,774,888,179],function(){return e(e.s=3725)}),_N_E=e.O()}]);