import { lista_webs } from "./data_web.js";

// Función para abrir la ventana modal con la información del proyecto
function openModal(title, description, imgSrc, repoLink, projectLink) {
    modalTitle.textContent = title; // Establecer el título de la ventana modal
    modalDescription.textContent = description; // Establecer la descripción de la ventana modal
    modalImage.src = imgSrc; // Establecer la imagen de la ventana modal
    modalRepoLink.href = repoLink; // Establecer el enlace del repositorio
    modalProjectLink.href = projectLink; // Establecer el enlace del proyecto
    modal.style.display = 'block'; // Mostrar la ventana modal
}

// Crear estructura de la ventana modal
const modal = document.createElement('div');
modal.id = 'myModal';
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';

const modalTitle = document.createElement('h2');
modalTitle.classList.add('modal-title');

const modalBody = document.createElement('div');
modalBody.classList.add('modal-body');

const modalImage = document.createElement('img');
modalImage.id = 'modalImage';
modalImage.classList.add('modal-image');

const modalText = document.createElement('div');
modalText.classList.add('modal-text');

const modalDescription = document.createElement('p');

const linkContainer = document.createElement('div');
linkContainer.classList.add('link-container');

const modalRepoLink = document.createElement('a');
modalRepoLink.classList.add('github');
modalRepoLink.textContent = 'github';

const modalProjectLink = document.createElement('a');
modalProjectLink.classList.add('proyect');
modalProjectLink.textContent = 'proyecto';

linkContainer.appendChild(modalRepoLink);
linkContainer.appendChild(modalProjectLink);

modalText.appendChild(modalDescription);
modalText.appendChild(linkContainer);

modalBody.appendChild(modalImage);
modalBody.appendChild(modalText);

modalContent.appendChild(closeBtn);
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalBody);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Función para cerrar la ventana modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Cerrar la ventana modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Iterar sobre cada elemento de la lista de webs
lista_webs.forEach((cada_web) => {
    let div_paginas = document.querySelector(".paginas");

    let div_web = document.createElement("div");
    div_web.classList.add("proyecto");
    div_web.innerHTML = `
        <h1>${cada_web.titulo}</h1>
        <div class="contenedor_img ">
            <img src="${cada_web.img}" alt="">
        </div>
    `;

    // Agregar evento de clic a la imagen para abrir la ventana modal con la información del proyecto
    div_web.querySelector('.contenedor_img img').onclick = function() {
        openModal(cada_web.titulo, cada_web.descripcion, cada_web.img, cada_web.link_repo, cada_web.githun_page);
    };

    div_paginas.appendChild(div_web);
});
