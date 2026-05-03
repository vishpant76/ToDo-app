import "./styles.css";
import { addProject, setCurrentProject } from "./state.js";
import { initDOM, render } from "./dom.js";

// initial setup
const p1 = addProject("Default");
setCurrentProject(p1.id);

initDOM();
render();
