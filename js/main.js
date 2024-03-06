import { header } from "./header_component.js";
import { perfil } from "./perfil_componet.js";
let div_root = document.querySelector(".root");
let componenetes = `
    <div class="header">${header}</div>
    <div class="perfil">${perfil}</div>
    <div class="pagina">
        <div class="item1"></div>
        <div class="item2"></div>
    </div>
`;

div_root.innerHTML = componenetes;