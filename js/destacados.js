import { lista_webs } from "./data_web.js";

lista_webs.forEach((cada_web) => {
    let div_paginas = document.querySelector(".paginas");

    let div_web = document.createElement("div");
    div_web.classList.add("proyecto");
    div_web.innerHTML = `
        <div class="contenedor_img">
            <img src="${cada_web.img}" alt="">
        </div>
        <h2>${cada_web.titulo}</h2>
        <p>${cada_web.descripcion}</p>
        <a href="${cada_web.link_repo}" class="github">github</a>
        <a href="${cada_web.githun_page}" class="proyect">proyecto</a>
    `;   

    div_paginas.appendChild(div_web);
});


