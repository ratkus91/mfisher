import"./main-B4Vu3tTR.js";import{e as L}from"./vendor-7imHcKDf.js";document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".order-form"),d=document.querySelectorAll(".budget-option"),o=document.getElementById("empty-error"),u=document.getElementById("file-upload"),g=document.getElementById("file-list"),a=new Set,E=e=>{if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e))return!1;const r=e.split("@")[1].split(".");return r.length<2?!1:r[r.length-1].length>=2},C=e=>{const s=document.querySelector(`#${e.id}-error`);if(e.type==="email"){if(!E(e.value))return s.textContent="Invalid E-mail",!1}else if(e.checkValidity())s.textContent="";else{const t=e.getAttribute("data-error-message")||"Invalid field.";return s.textContent=t,!1}return!0},m=document.getElementById("user-comment"),p=document.getElementById("char-counter"),h=parseInt(m.getAttribute("minlength"),10),y=()=>{const t=m.value.split("").length;p.textContent=`${t}/${h}`,t>h?p.classList.add("error"):p.classList.remove("error")};m.addEventListener("input",y);const v=()=>{const e=u.files,s=["doc","docx","pdf","ppt","pptx","xlsx","zip","rar"],t=30*1024*1024,r=3;if(!o)return!1;for(let n of e){const f=n.name.split(".").pop().toLowerCase();if(a.has(n.name)){o.textContent=`File ${n.name} is already added.`;continue}if(!s.includes(f))return o.textContent=`Unsupported file format: ${n.name}`,!1;if(n.size>t)return o.textContent=`File ${n.name} exceeds the 30MB size limit.`,!1;if(a.size>=r)return o.textContent=`You can attach up to ${r} files.`,!1;const i=document.createElement("li");i.classList.add("file__item");const x=document.createElement("span");x.textContent=n.name;const c=document.createElement("button");c.innerHTML='<span class="icon icon-close"></span>',c.classList.add("btn-del"),c.addEventListener("click",()=>{i.remove(),a.delete(n.name),u.value="",o.textContent=""}),i.appendChild(x),i.appendChild(c),g.appendChild(i),a.add(n.name)}return o.textContent="",!0},b=()=>{let e=!0;return l.querySelectorAll(".validate").forEach(t=>{t.id&&!C(t)?(e=!1,t.classList.add("field-error")):t.classList.remove("field-error")}),v()||(e=!1),e},_=e=>{d.forEach(s=>s.classList.remove("selected")),e.target.classList.add("selected")};l.addEventListener("submit",e=>{var s;if(e.preventDefault(),b()){o.textContent="";const t=new FormData(l);L.init("lLSKvVcx1LQ3lQ7Qy");const r={user_name:t.get("user-name"),user_email:t.get("user-email"),user_phone:t.get("user-phone"),user_comment:t.get("user-comment"),project_budget:((s=document.querySelector(".budget-option.selected"))==null?void 0:s.getAttribute("data-value"))||"Not specified",user_nda:t.get("user-nda")?"Yes":"No"};L.send("service_d3x1f1d","template_9nakrge",r).then(()=>{const n=document.getElementById("popup-mini");n.classList.remove("hide"),n.classList.add("is-open"),n.querySelector(".popup-mini__close-btn").addEventListener("click",()=>{n.classList.remove("is-open"),n.classList.add("hide")}),l.reset(),g.innerHTML="",d.forEach(f=>f.classList.remove("selected")),a.clear()}).catch(n=>{console.error("Error submitting form:",n),alert("There was an error submitting the form.")})}else o.textContent="Please fix the errors above before submitting."}),d.forEach(e=>{e.addEventListener("click",_)}),u.addEventListener("change",v)});
//# sourceMappingURL=contact-us-D-5yJkJb.js.map
