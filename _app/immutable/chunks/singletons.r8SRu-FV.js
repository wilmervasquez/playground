import{n as d,s as m}from"./scheduler.tdcquOLB.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(m(t,s)&&(t=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(t))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=e(r,i)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}const E=globalThis.__sveltekit_n9ry0s?.base??"",A=globalThis.__sveltekit_n9ry0s?.assets??E,R="1711295079719",I="sveltekit:snapshot",w="sveltekit:scroll",N="sveltekit:states",U="sveltekit:pageurl",L="sveltekit:history",O="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function Y(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function x(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return e?.nodeType===11&&(e=e.host),e}function P(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function V(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=n?.origin===g&&t.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function G(t){let e=null,n=null,o=null,r=null,i=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(i),replace_state:c(a)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function i(a){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function T(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==R;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function S(t,e){return t.origin!==g||!t.pathname.startsWith(e)}let k;function K(t){k=t.client}function j(t){return(...e)=>k[t](...e)}const q={url:h({}),page:h({}),navigating:p(null),updated:T()};export{L as H,O as N,U as P,w as S,N as a,I as b,G as c,q as d,E as e,P as f,V as g,_ as h,S as i,K as j,j as k,k as l,g as o,Y as r,x as s};
