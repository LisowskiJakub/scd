const e=document.querySelector(".cookie"),o=document.querySelectorAll(".button");window.addEventListener("load",(()=>{document.cookie.includes("SCD")||(e.classList.add("show"),o.forEach((o=>{o.addEventListener("click",(()=>{e.classList.remove("show"),"acceptBtn"==o.id&&(document.cookie="cookieBy= SCD; max-age=2592000")}))})))})),console.log(`${navigator.language} język przeglądarki`);
//# sourceMappingURL=index.2b34b87a.js.map