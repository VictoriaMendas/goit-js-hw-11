import{S as f,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){const t="44385883-198adbd7f849b7ff14e77c80c",s="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(o){return o.map(t=>`    <li class="photo-card">
    
    <a class="img-link" href="${t.largeImageURL}">
    <img class="img-card"
      src="${t.webformatURL}"
      alt="${t.tags}"

    /></a>
    <div class="info">
      <p class="info-item">
        <b>Likes ${t.likes}</b>
      </p>
      <p class="info-item"><b>Views ${t.views}</b></p>
      <p class="info-item"><b>Comments ${t.comments}</b></p>
      <p class="info-item"><b>Downloads ${t.downloads}</b></p>
    </div>
  </li>
 `).join("")}const p=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector("form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");m.addEventListener("submit",h);function h(o){o.preventDefault(),l.innerHTML="",a.classList.remove("is-hidden");const t=o.target.elements.search.value.trim();if(t===""){a.classList.add("is-hidden");return}u(t).then(s=>{s.hits.length===0&&c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=d(s.hits),p.refresh()}).catch(s=>c.error({position:"topLeft",message:"Error. Please try again!!"})).finally(()=>a.classList.add("is-hidden"))}
//# sourceMappingURL=commonHelpers.js.map
