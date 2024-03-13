import { header } from "./header_component.js";
import { perfil } from "./perfil_componet.js";
let div_root = document.querySelector(".root");
let componenetes = `
    <div class="header">${header}</div>
    <div class="perfil">${perfil}</div>
    <div class="paginas"></div>
    <div class="soporte"></div>
`;

div_root.innerHTML = componenetes;