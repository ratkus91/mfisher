import"./main-DoURuD2X.js";import{e as g}from"./vendor-9NJafnbr.js";document.addEventListener("DOMContentLoaded",()=>{const x=document.querySelectorAll(".hero__btn, .team__btn, .cta__btn, .accordion__btn, .process__btn"),i=document.getElementById("popup"),E=i.querySelector(".popup__close"),l=document.querySelector(".order-form"),u=document.querySelectorAll(".budget-option"),o=document.getElementById("empty-error"),L=document.getElementById("file-upload"),d=document.getElementById("file-list"),a=new Set,p=()=>{l.querySelectorAll(".validate").forEach(s=>{s.classList.remove("field-error");const t=document.querySelector(`#${s.id}-error`);t&&(t.textContent="")}),o&&(o.textContent="")};x.forEach(e=>{e.addEventListener("click",()=>{i.classList.add("is-open"),document.querySelector("html").classList.add("no-scroll")})}),E.addEventListener("click",()=>{l.reset(),d.innerHTML="",u.forEach(e=>e.classList.remove("selected")),a.clear(),i.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll"),p()}),i.addEventListener("click",e=>{e.target===i&&(l.reset(),d.innerHTML="",u.forEach(s=>s.classList.remove("selected")),a.clear(),i.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll"),p())});const _=e=>{if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e))return!1;const r=e.split("@")[1].split(".");return r.length<2?!1:r[r.length-1].length>=2},y=e=>{const s=document.querySelector(`#${e.id}-error`);if(e.type==="email"){if(!_(e.value))return s.textContent="Invalid E-mail",!1}else if(e.checkValidity())s.textContent="";else{const t=e.getAttribute("data-error-message")||"Invalid field.";return s.textContent=t,!1}return!0},v=()=>{const e=L.files,s=["doc","docx","pdf","ppt","pptx","xlsx"],t=30*1024*1024,r=3;if(!o)return!1;for(let n of e){const f=n.name.split(".").pop().toLowerCase();if(a.has(n.name)){o.textContent=`File ${n.name} is already added.`;continue}if(!s.includes(f))return o.textContent=`Unsupported file format: ${n.name}`,!1;if(n.size>t)return o.textContent=`File ${n.name} exceeds the 30MB size limit.`,!1;if(a.size>=r)return o.textContent=`You can attach up to ${r} files.`,!1;const c=document.createElement("li");c.classList.add("file__item");const h=document.createElement("span");h.textContent=n.name;const m=document.createElement("button");m.innerHTML='<span class="icon icon-close"></span>',m.classList.add("btn-del"),m.addEventListener("click",()=>{c.remove(),a.delete(n.name),o.textContent=""}),c.appendChild(h),c.appendChild(m),d.appendChild(c),a.add(n.name)}return o.textContent="",!0},b=()=>{let e=!0;return l.querySelectorAll(".validate").forEach(t=>{t.id&&!y(t)?(e=!1,t.classList.add("field-error")):t.classList.remove("field-error")}),v()||(e=!1),e};l.addEventListener("submit",e=>{var s;if(e.preventDefault(),b()){o.textContent="";const t=new FormData(l);g.init("lLSKvVcx1LQ3lQ7Qy");const r={user_name:t.get("user-name"),user_email:t.get("user-email"),user_phone:t.get("user-phone"),user_comment:t.get("user-comment"),project_budget:((s=document.querySelector(".budget-option.selected"))==null?void 0:s.getAttribute("data-value"))||"Not specified",user_nda:t.get("user-nda")?"Yes":"No"};g.send("service_d3x1f1d","template_9nakrge",r).then(()=>{const n=document.getElementById("popup-mini");n.classList.remove("hide"),n.classList.add("is-open"),n.querySelector(".popup-mini__close-btn").addEventListener("click",()=>{n.classList.remove("is-open"),n.classList.add("hide"),l.reset(),d.innerHTML="",u.forEach(f=>f.classList.remove("selected")),a.clear(),p()})}).catch(n=>{console.error("Error submitting form:",n),alert("There was an error submitting the form.")})}else o.textContent="Please fix the errors above before submitting."}),L.addEventListener("change",v)});
//# sourceMappingURL=index-Dxtq6jTu.js.map
