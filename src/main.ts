import "./style.css";
import "./tailwind.css";
import { observeBreakpoint } from "./scroll.ts";
import template  from "./template.html?raw";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `${template}`;

observeBreakpoint();
