(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".menu-side");e.addEventListener("click",(e=>{let o=e.target;o.closest(".block-user__icon_transform")||o.classList.contains("menu-side__close")?t.classList.toggle("menu-side_active"):o.matches(".menu-side__block")||o.matches("menu ul, li")?t.classList.add("menu-side_active"):t.classList.remove("menu-side_active")}))})(),(()=>{const e=document.querySelector(".our-team__slider-body"),t=document.querySelector(".our-team__slider-track"),o=document.querySelectorAll(".our-team__slide"),s=document.querySelector("#btn-left"),c=document.querySelector("#btn-right"),n=o.length,r=e.clientWidth,l=r;let d=0;const a=()=>{t.style.transform=`translateX(${d}px)`};s.addEventListener("click",(()=>{d+=l,a(),i()})),c.addEventListener("click",(()=>{d-=l,a(),i()}));const i=()=>{0===d?(s.style.opacity=.5,s.disabled=!0):d<=-(n-1)*r?(c.style.opacity=.5,c.disabled=!0):(s.style.opacity=1,s.disabled=!1,c.style.opacity=1,c.disabled=!1)};i()})(),document.querySelector(".search-form__text-field").addEventListener("click",(e=>{e.preventDefault()})),(({idForm:e})=>{const t=document.querySelector(".popup"),o=document.getElementById(e),s=document.createElement("div");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),c=new FormData(o),n={};var r;s.textContent="Загрузка...",o.append(s),s.style.marginTop="20px",c.forEach(((e,t)=>{n[t]=e})),(e=>{let t=!0;return e.forEach((e=>{switch(e.name){case"user_name":/[а-яА-Я\s]/g.test(e.value)?(e.style.border="1.5px solid red",t=!1):e.style.border="1px solid #808080";break;case"user_email":/[^a-z0-9@-_.!~*']/g.test(e.value)?(e.style.border="1.5px solid red",t=!1):e.style.border="1px solid #808080"}})),t})(e)?(r=JSON.stringify(n),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:r,headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((o=>{s.textContent="Добро пожаловать!",setTimeout((()=>{t.style.display="none",s.textContent=""}),1e3),e.forEach((e=>{e.value=""}))})).catch((e=>{s.textContent="Ошибка..."})):s.textContent="Данные не вылидны"})()}))})({idForm:"form-entry"}),(()=>{const e=document.querySelector(".block-user__link"),t=document.querySelector(".popup");t.querySelector(".popup__body"),e.addEventListener("click",(()=>{t.style.display="block"})),t.addEventListener("click",(e=>{let o=e.target;(o.matches(".popup__close")||o.matches(".popup__container"))&&(t.style.display="none")}))})()})();