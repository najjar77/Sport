import{I as Be,J as Fe,K as de,v as P,L as M,T as se,M as H,N as G,O as Le,P as Ye,Q as ce,R as Ue,r as L,S as I,U as ve,E as A,V as R,W as Xe,X as ge,Y as ne,Z as oe,$ as he,c as C,a0 as K,a1 as ae,a2 as we,a3 as Ee,a4 as D,a5 as pe,C as me,a6 as Ve,a7 as De,a8 as Ge,a9 as Me,aa as Ke,ab as j,ac as Ze,o as Je,ad as Re,ae as Qe,af as et,ag as tt,ah as nt,ai as ot,aj as at,ak as it,al as _e,am as rt,an as lt,ao as st,ap as ct,aq as ut,ar as ft,as as Ne,at as dt,au as vt,av as mt,aw as yt,ax as gt,ay as ht,az as wt,aA as Et,aB as pt,aC as bt,d as xt,i as St,q as Ot,aD as ie,aE as be,s as te,t as kt,x as Pt,m as Ct,aF as At}from"./entry.36d7c299.js";import{u as He}from"./scopeId.93db0962.js";const Z=new WeakMap;function Tt(e,n){Object.keys(n).forEach(t=>{if(Be(t)){const o=Fe(t),a=Z.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),Z.has(e)||Z.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Bt(e,n){Object.keys(n).forEach(t=>{if(Be(t)){const o=Fe(t),a=Z.get(e);a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function Ie(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Ft(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Lt(e):ye(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ye(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ye(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Lt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Vt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Dt=H({target:Object},"v-dialog-transition"),Mt=de()({name:"VDialogTransition",props:Dt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var v;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:l,y:r,sx:c,sy:f,speed:u}=Se(e.target,a),d=G(a,[{transform:`translate(${l}px, ${r}px) scale(${c}, ${f})`,opacity:0},{}],{duration:225*u,easing:Ye});(v=xe(a))==null||v.forEach(g=>{G(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:ce})}),d.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var v;await new Promise(g=>requestAnimationFrame(g));const{x:l,y:r,sx:c,sy:f,speed:u}=Se(e.target,a);G(a,[{},{transform:`translate(${l}px, ${r}px) scale(${c}, ${f})`,opacity:0}],{duration:125*u,easing:Ue}).finished.then(()=>i()),(v=xe(a))==null||v.forEach(g=>{G(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?P(se,M({name:"dialog-transition"},o,{css:!1}),t):P(se,{name:"dialog-transition"},t)}});function xe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Se(e,n){const t=e.getBoundingClientRect(),o=Le(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(x=>parseFloat(x)),[l,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;l==="left"||r==="left"?c-=t.width/2:(l==="right"||r==="right")&&(c+=t.width/2);let f=t.top+t.height/2;l==="top"||r==="top"?f-=t.height/2:(l==="bottom"||r==="bottom")&&(f+=t.height/2);const u=t.width/o.width,d=t.height/o.height,v=Math.max(1,u,d),g=u/v||0,y=d/v||0,m=o.width*o.height/(window.innerWidth*window.innerHeight),k=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:c-(a+o.left),y:f-(i+o.top),sx:g,sy:y,speed:k}}function re(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Rt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Oe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return re({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return re({x:a,y:i},n)}return re({x:n.width/2,y:n.height/2},n)}const $e={static:Ht,connected:$t},_t=H({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in $e},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Nt(e,n){const t=L({}),o=L();I&&(ve(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,r;A(()=>e.locationStrategy,i),R(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(r=$e[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation}),window.addEventListener("resize",a,{passive:!0}),R(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ht(){}function It(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Le(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function $t(e,n,t){Vt(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Xe(()=>{const y=ge(n.location,e.isRtl.value),m=n.origin==="overlap"?y:n.origin==="auto"?ne(y):ge(n.origin,e.isRtl.value);return y.side===m.side&&y.align===oe(m).align?{preferredAnchor:he(y),preferredOrigin:he(m)}:{preferredAnchor:y,preferredOrigin:m}}),[l,r,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>C(()=>{const m=parseFloat(n[y]);return isNaN(m)?1/0:m})),u=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const v=new ResizeObserver(()=>{d&&g()});A([e.activatorEl,e.contentEl],(y,m)=>{let[k,x]=y,[p,s]=m;p&&v.unobserve(p),k&&v.observe(k),s&&v.unobserve(s),x&&v.observe(x)},{immediate:!0}),R(()=>{v.disconnect()});function g(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),m=It(e.contentEl.value,e.isRtl.value),k=Q(e.contentEl.value),x=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=k.reduce((S,b)=>{const h=b.getBoundingClientRect(),E=new ae({x:b===document.documentElement?0:h.x,y:b===document.documentElement?0:h.y,width:b.clientWidth,height:b.clientHeight});return S?new ae({x:Math.max(S.left,E.left),y:Math.max(S.top,E.top),width:Math.min(S.right,E.right)-Math.max(S.left,E.left),height:Math.min(S.bottom,E.bottom)-Math.max(S.top,E.top)}):E},void 0);p.x+=x,p.y+=x,p.width-=x*2,p.height-=x*2;let s={anchor:a.value,origin:i.value};function B(S){const b=new ae(m),h=Oe(S.anchor,y),E=Oe(S.origin,b);let{x:F,y:V}=Rt(h,E);switch(S.anchor.side){case"top":V-=u.value[0];break;case"bottom":V+=u.value[0];break;case"left":F-=u.value[0];break;case"right":F+=u.value[0];break}switch(S.anchor.align){case"top":V-=u.value[1];break;case"bottom":V+=u.value[1];break;case"left":F-=u.value[1];break;case"right":F+=u.value[1];break}return b.x+=F,b.y+=V,b.width=Math.min(b.width,c.value),b.height=Math.min(b.height,f.value),{overflows:Ee(b,p),x:F,y:V}}let N=0,$=0;const q={x:0,y:0},Y={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:S,y:b,overflows:h}=B(s);N+=S,$+=b,m.x+=S,m.y+=b;{const E=we(s.anchor),F=h.x.before||h.x.after,V=h.y.before||h.y.after;let z=!1;if(["x","y"].forEach(O=>{if(O==="x"&&F&&!Y.x||O==="y"&&V&&!Y.y){const w={anchor:{...s.anchor},origin:{...s.origin}},T=O==="x"?E==="y"?oe:ne:E==="y"?ne:oe;w.anchor=T(w.anchor),w.origin=T(w.origin);const{overflows:W}=B(w);(W[O].before<=h[O].before&&W[O].after<=h[O].after||W[O].before+W[O].after<(h[O].before+h[O].after)/2)&&(s=w,z=Y[O]=!0)}}),z)continue}h.x.before&&(N+=h.x.before,m.x+=h.x.before),h.x.after&&(N-=h.x.after,m.x-=h.x.after),h.y.before&&($+=h.y.before,m.y+=h.y.before),h.y.after&&($-=h.y.after,m.y-=h.y.after);{const E=Ee(m,p);q.x=p.width-E.x.before-E.x.after,q.y=p.height-E.y.before-E.y.after,N+=E.x.before,m.x+=E.x.before,$+=E.y.before,m.y+=E.y.before}break}const _=we(s.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${s.anchor.side} ${s.anchor.align}`,transformOrigin:`${s.origin.side} ${s.origin.align}`,top:D(le($)),left:e.isRtl.value?void 0:D(le(N)),right:e.isRtl.value?D(le(-N)):void 0,minWidth:D(_==="y"?Math.min(l.value,y.width):l.value),maxWidth:D(ke(pe(q.x,l.value===1/0?0:l.value,c.value))),maxHeight:D(ke(pe(q.y,r.value===1/0?0:r.value,f.value)))}),{available:q,contentBox:m}}return A(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),K(()=>{const y=g();if(!y)return;const{available:m,contentBox:k}=y;k.height>m.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ke(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const ee=[];function qt(e){!ue||ee.length?(ee.push(e),fe()):(ue=!1,e(),fe())}let Pe=-1;function fe(){cancelAnimationFrame(Pe),Pe=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?fe():ue=!0})}const J={none:null,close:jt,block:Yt,reposition:Ut},Wt=H({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function zt(e,n){if(!I)return;let t;me(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ve(),await K(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),R(()=>{t==null||t.stop()})}function jt(e){function n(t){e.isActive.value=!1}qe(e.activatorEl.value??e.contentEl.value,n)}function Yt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Q(e.activatorEl.value,n.contained?t:void 0),...Q(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ye(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",D(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",D(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",D(a)),r.classList.add("v-overlay-scroll-blocked")}),R(()=>{o.forEach((r,c)=>{const f=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-f,r.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ut(e,n,t){let o=!1,a=-1,i=-1;function l(r){qt(()=>{var u,d;const c=performance.now();(d=(u=e.updateLocation).value)==null||d.call(u,r),o=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{qe(e.activatorEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(r)})})):l(r)})})}),R(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function qe(e,n){const t=[document,...Q(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),R(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Xt=Symbol.for("vuetify:v-menu"),Gt=H({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Kt(e,n){const t={},o=a=>()=>{if(!I)return Promise.resolve(!0);const i=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(l=>{const r=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(i),l(i)},r)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Zt=H({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Gt()},"VOverlay-activator");function Jt(e,n){let{isActive:t,isTop:o}=n;const a=L();let i=!1,l=!1,r=!0;const c=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:d}=Kt(e,s=>{s===(e.openOnHover&&i||c.value&&l)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(r=!0),t.value=s)}),v={onClick:s=>{s.stopPropagation(),a.value=s.currentTarget||s.target,t.value=!t.value},onMouseenter:s=>{var B;(B=s.sourceCapabilities)!=null&&B.firesTouchEvents||(i=!0,a.value=s.currentTarget||s.target,u())},onMouseleave:s=>{i=!1,d()},onFocus:s=>{Ke(s.target,":focus-visible")!==!1&&(l=!0,s.stopPropagation(),a.value=s.currentTarget||s.target,u())},onBlur:s=>{l=!1,s.stopPropagation(),d()}},g=C(()=>{const s={};return f.value&&(s.onClick=v.onClick),e.openOnHover&&(s.onMouseenter=v.onMouseenter,s.onMouseleave=v.onMouseleave),c.value&&(s.onFocus=v.onFocus,s.onBlur=v.onBlur),s}),y=C(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{i=!0,u()},s.onMouseleave=()=>{i=!1,d()}),c.value&&(s.onFocusin=()=>{l=!0,u()},s.onFocusout=()=>{l=!1,d()}),e.closeOnContentClick){const B=De(Xt,null);s.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return s}),m=C(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{r&&(i=!0,r=!1,u())},s.onMouseleave=()=>{i=!1,d()}),s});A(o,s=>{s&&(e.openOnHover&&!i&&(!c.value||!l)||c.value&&!l&&(!e.openOnHover||!i))&&(t.value=!1)});const k=L();me(()=>{k.value&&K(()=>{a.value=Ge(k.value)})});const x=Me("useActivator");let p;return A(()=>!!e.activator,s=>{s&&I?(p=Ve(),p.run(()=>{Qt(e,x,{activatorEl:a,activatorEvents:g})})):p&&p.stop()},{flush:"post",immediate:!0}),R(()=>{p==null||p.stop()}),{activatorEl:a,activatorRef:k,activatorEvents:g,contentEvents:y,scrimEvents:m}}function Qt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;A(()=>e.activator,(c,f)=>{if(f&&c!==f){const u=r(f);u&&l(u)}c&&K(()=>i())},{immediate:!0}),A(()=>e.activatorProps,()=>{i()}),R(()=>{l()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Tt(c,M(a.value,f))}function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Bt(c,M(a.value,f))}function r(){var u,d;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(c)if(c==="parent"){let v=(d=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:d.parentNode;for(;v!=null&&v.hasAttribute("data-no-activator");)v=v.parentNode;f=v}else typeof c=="string"?f=document.querySelector(c):"$el"in c?f=c.$el:f=c;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}function en(){if(!I)return j(!1);const{ssr:e}=Ze();if(e){const n=j(!1);return Je(()=>{n.value=!0}),n}else return j(!0)}const tn=H({eager:Boolean},"lazy");function nn(e,n){const t=j(!1),o=C(()=>t.value||e.eager||n.value);A(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Ce=Symbol.for("vuetify:stack"),X=Re([]);function on(e,n,t){const o=Me("useStack"),a=!t,i=De(Ce,void 0),l=Re({activeChildren:new Set});Qe(Ce,l);const r=j(+n.value);ve(e,()=>{var d;const u=(d=X.at(-1))==null?void 0:d[1];r.value=u?u+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),R(()=>{if(a){const v=tt(X).findIndex(g=>g[0]===o.uid);X.splice(v,1)}i==null||i.activeChildren.delete(o.uid)})});const c=j(!0);a&&me(()=>{var d;const u=((d=X.at(-1))==null?void 0:d[0])===o.uid;setTimeout(()=>c.value=u)});const f=C(()=>!l.activeChildren.size);return{globalTop:et(c),localTop:f,stackStyles:C(()=>({zIndex:r.value}))}}function an(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!I)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function rn(){return!0}function We(e,n,t){if(!e||ze(e,t)===!1)return!1;const o=Ie(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function ze(e,n){return(typeof n.value=="object"&&n.value.closeConditional||rn)(e)}function ln(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&We(e,n,t)&&setTimeout(()=>{ze(e,t)&&o&&o(e)},0)}function Ae(e,n){const t=Ie(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const sn={mounted(e,n){const t=a=>ln(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=We(a,e,n)};Ae(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Ae(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function cn(e){const{modelValue:n,color:t,...o}=e;return P(se,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&P("div",M({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const je=H({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Zt(),...nt(),...ot(),...tn(),..._t(),...Wt(),...at(),...it()},"VOverlay"),Te=de()({name:"VOverlay",directives:{ClickOutside:sn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...je()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=_e(e,"modelValue"),l=C({get:()=>i.value,set:w=>{w&&e.disabled||(i.value=w)}}),{teleportTarget:r}=an(C(()=>e.attach||e.contained)),{themeClasses:c}=rt(e),{rtlClasses:f,isRtl:u}=lt(),{hasContent:d,onAfterLeave:v}=nn(e,l),g=st(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:m,stackStyles:k}=on(l,ct(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:p,activatorEvents:s,contentEvents:B,scrimEvents:N}=Jt(e,{isActive:l,isTop:m}),{dimensionStyles:$}=ut(e),q=en(),{scopeId:Y}=He();A(()=>e.disabled,w=>{w&&(l.value=!1)});const U=L(),_=L(),{contentStyles:S,updateLocation:b}=Nt(e,{isRtl:u,contentEl:_,activatorEl:x,isActive:l});zt(e,{root:U,contentEl:_,activatorEl:x,isActive:l,updateLocation:b});function h(w){a("click:outside",w),e.persistent?O():l.value=!1}function E(){return l.value&&y.value}I&&A(l,w=>{w?window.addEventListener("keydown",F):window.removeEventListener("keydown",F)},{immediate:!0});function F(w){var T,W;w.key==="Escape"&&y.value&&(e.persistent?O():(l.value=!1,(T=_.value)!=null&&T.contains(document.activeElement)&&((W=x.value)==null||W.focus())))}const V=ft();ve(()=>e.closeOnBack,()=>{wt(V,w=>{y.value&&l.value?(w(!1),e.persistent?O():l.value=!1):w()})});const z=L();A(()=>l.value&&(e.absolute||e.contained)&&r.value==null,w=>{if(w){const T=Ft(U.value);T&&T!==document.scrollingElement&&(z.value=T.scrollTop)}});function O(){e.noClickAnimation||_.value&&G(_.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}return Ne(()=>{var w;return P(ht,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:l.value,props:M({ref:p},s.value,e.activatorProps)}),q.value&&d.value&&P(dt,{disabled:!r.value,to:r.value},{default:()=>[P("div",M({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},c.value,f.value,e.class],style:[k.value,{top:D(z.value)},e.style],ref:U},Y,o),[P(cn,M({color:g,modelValue:l.value&&!!e.scrim},N.value),null),P(vt,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{v(),a("afterLeave")}},{default:()=>{var T;return[mt(P("div",M({ref:_,class:["v-overlay__content",e.contentClass],style:[$.value,S.value]},B.value,e.contentProps),[(T=t.default)==null?void 0:T.call(t,{isActive:l})]),[[yt,l.value],[gt("click-outside"),{handler:h,closeConditional:E,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,animateClick:O,contentEl:_,globalTop:y,localTop:m,updateLocation:b}}}),un=H({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...je({origin:"center center",scrollStrategy:"block",transition:{component:Mt},zIndex:2400})},"VDialog"),fn=de()({name:"VDialog",props:un(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=_e(e,"modelValue"),{scopeId:a}=He(),i=L();function l(c){var d,v;const f=c.relatedTarget,u=c.target;if(f!==u&&((d=i.value)!=null&&d.contentEl)&&((v=i.value)!=null&&v.globalTop)&&![document,i.value.contentEl].includes(u)&&!i.value.contentEl.contains(u)){const g=bt(i.value.contentEl);if(!g.length)return;const y=g[0],m=g[g.length-1];f===y?m.focus():y.focus()}}I&&A(()=>o.value&&e.retainFocus,c=>{c?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),A(o,async c=>{var f,u;await K(),c?(f=i.value.contentEl)==null||f.focus({preventScroll:!0}):(u=i.value.activatorEl)==null||u.focus({preventScroll:!0})});const r=C(()=>M({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps));return Ne(()=>{const[c]=Te.filterProps(e);return P(Te,M({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},c,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,"aria-modal":"true",activatorProps:r.value,role:"dialog"},a),{activator:t.activator,default:function(){for(var f=arguments.length,u=new Array(f),d=0;d<f;d++)u[d]=arguments[d];return P(pt,{root:"VDialog"},{default:()=>{var v;return[(v=t.default)==null?void 0:v.call(t,...u)]}})}})}),Et({},i)}}),dn=te("h2",null,"date picker",-1),vn=te("span",null,"Neuer Eintrag.",-1),mn=te("h1",null,"ein dialogtext",-1),hn=xt({__name:"galary",setup(e){const n=L();L([]);const t=L(!1),o=()=>{console.log("dialog öffnet"),t.value=!0};return(a,i)=>{const l=St("v-date-picker");return Ct(),Ot("div",null,[dn,P(At,{onClick:o,size:"large",icon:"mdi-plus"}),vn,P(l,{modelValue:ie(n),"onUpdate:modelValue":i[0]||(i[0]=r=>be(n)?n.value=r:null),"show-adjacent-months":""},null,8,["modelValue"]),te("h1",null,kt(ie(n)),1),P(fn,{modelValue:ie(t),"onUpdate:modelValue":i[1]||(i[1]=r=>be(t)?t.value=r:null),activator:"parent",width:"auto"},{default:Pt(()=>[mn]),_:1},8,["modelValue"])])}}});export{hn as default};
