const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-DzozXdfx.js","assets/vendor-DceGFQtL.css"])))=>i.map(i=>d[i]);
import{S as w,N as E,P as y,i as S}from"./vendor-DzozXdfx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const b="modulepreload",A=function(o){return"/"+o},h={},O=function(r,n,s){let e=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(n.map(c=>{if(c=A(c),c in h)return;h[c]=!0;const u=c.endsWith(".css"),_=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":b,u||(a.as="script"),a.crossOrigin="",a.href=c,l&&a.setAttribute("nonce",l),document.head.appendChild(a),u)return new Promise((L,x)=>{a.addEventListener("load",L),a.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return e.then(i=>{for(const l of i||[])l.status==="rejected"&&t(l.reason);return r().catch(t)})},m=document.querySelector(".header__toggle-btn"),P=document.querySelector(".mobile-menu"),f=document.querySelector(".nav__logo_mob");m.addEventListener("click",function(){this.classList.toggle("is-active"),P.classList.toggle("is-open")?(f.classList.add("white"),m.classList.add("white")):(f.classList.remove("white"),m.classList.remove("white")),document.documentElement.classList.toggle("no-scroll")});document.querySelectorAll(".accordion__header").forEach((o,r)=>{const n=s=>{document.querySelectorAll(".accordion__header").forEach(e=>{const t=e.nextElementSibling,i=window.matchMedia("(max-width: 1279px)").matches,l=e===s;e.setAttribute("aria-expanded",l),t&&(l?t.style.maxHeight=i?t.scrollHeight+"px":"none":t.style.maxHeight=null)})};if(r===0){o.setAttribute("aria-expanded","true");const s=o.nextElementSibling;s&&(s.style.maxHeight=window.matchMedia("(max-width: 1279px)").matches?s.scrollHeight+32+"px":"none")}o.addEventListener("click",()=>{o.getAttribute("aria-expanded")==="true"||n(o)})});let p=window.scrollY;const d=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>p?(d.style.transform="translateY(-100%)",d.classList.remove("scroll")):(d.style.transform="translateY(0)",d.classList.add("scroll")),window.scrollY===0&&(d.style.transform="translateY(0)",d.classList.remove("scroll")),p=window.scrollY});new w(".testimonials__list",{modules:[E,y],slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},watchOverflow:!0,navigation:{nextEl:".swiper__button-next",prevEl:".swiper__button-prev"}});new w(".team__swiper",{modules:[E,y],navigation:{nextEl:".swiper__button-next",prevEl:".swiper__button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0});function v(o,r){document.querySelectorAll(o).forEach(n=>{const e=parseFloat(getComputedStyle(n).lineHeight)*r;if(n.scrollHeight>e){let t=n.textContent;for(;n.scrollHeight>e;)t=t.slice(0,-1),n.textContent=t+"..."}})}v(".testimonials__item-text",5);function q(){console.log("Размер экрана изменился:",window.innerWidth,window.innerHeight),v(".testimonials__item-text",5)}window.addEventListener("resize",q);const g=document.querySelectorAll(".budget-option");g.forEach(o=>{o.addEventListener("click",()=>{g.forEach(r=>r.classList.remove("selected")),o.classList.add("selected")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector("#user-phone");S(o,{initialCountry:"auto",geoIpLookup:r=>{fetch("https://ipapi.co/json").then(n=>n.json()).then(n=>r(n.country_code)).catch(()=>r("us"))},strictMode:!0,loadUtilsOnInit:()=>O(()=>import("./vendor-DzozXdfx.js").then(r=>r.u),__vite__mapDeps([0,1]))})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href").substring(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})})})});
//# sourceMappingURL=main-CKXVQeM5.js.map