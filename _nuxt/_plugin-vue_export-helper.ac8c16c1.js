import{B as u,r as c,C as f,D as v,e as d,E as l,F as i,G as h,H as p}from"./entry.cc900fea.js";function I(t,a={}){const e=a.head||u();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return v(n,o=>{r.patch(o)}),p()&&(d(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}const U=(t,a)=>{const e=t.__vccOpts||t;for(const[s,n]of a)e[s]=n;return e};export{U as _,I as u};
