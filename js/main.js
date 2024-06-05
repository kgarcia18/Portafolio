import { header } from "./header.js";
import { stacks } from "./stacks.js";
let div_root = document.querySelector(".root");
let componenetes = `
    <header>${header}</header>
    <div class="stacks">${stacks}</div>
    <div class="paginas"></div>
`;

div_root.innerHTML = componenetes;