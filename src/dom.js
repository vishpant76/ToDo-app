import {
  state,
  addProject,
  setCurrentProject,
  getCurrentProject,
} from "./state.js";
import { createTodo } from "./data.js";

const projectsEl = document.querySelector(".projects");
const todosEl = document.querySelector(".todos");
const titleEl = document.querySelector(".project-title");
const countEl = document.querySelector(".task-count");

const projectForm = document.querySelector("#project-form");
const todoForm = document.querySelector("#todo-form");
const addTaskBtn = document.querySelector(".add-task-btn");

/* ---------- INIT ---------- */

export function initDOM() {
  projectForm.addEventListener("submit", handleAddProject);
  todoForm.addEventListener("submit", handleAddTodo);

  addTaskBtn.addEventListener("click", () => {
    todoForm.classList.toggle("hidden");
  });
}

/* ---------- PROJECTS ---------- */

function handleAddProject(e) {
  e.preventDefault();
  const input = projectForm.querySelector("input");

  const p = addProject(input.value);
  setCurrentProject(p.id);

  input.value = "";
  render();
}

function renderProjects() {
  projectsEl.innerHTML = "";

  state.projects.forEach((p) => {
    const div = document.createElement("div");
    div.textContent = p.name;

    if (p.id === state.currentProjectId) {
      div.classList.add("active");
    }

    div.onclick = () => {
      setCurrentProject(p.id);
      render();
    };

    projectsEl.appendChild(div);
  });
}

/* ---------- TODOS ---------- */

function handleAddTodo(e) {
  e.preventDefault();

  const inputs = todoForm.querySelectorAll("input, select");

  const todo = createTodo(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
  );

  getCurrentProject().todos.push(todo);

  todoForm.reset();
  todoForm.classList.add("hidden");

  render();
}

function renderTodos() {
  const project = getCurrentProject();

  if (!project) {
    todosEl.innerHTML = "";
    titleEl.textContent = "";
    countEl.textContent = "";
    return;
  }

  titleEl.textContent = project.name;
  countEl.textContent = `${project.todos.length} tasks`;

  todosEl.innerHTML = "";

  project.todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    const title = document.createElement("div");
    title.textContent = todo.title;

    const details = document.createElement("div");
    details.className = "todo-details hidden";
    details.innerHTML = `
      <div>Description: ${todo.desc}</div>
      <div>Priority: ${todo.priority}</div>
      <div>Due: ${todo.dueDate}</div>
    `;

    div.append(title, details);

    div.onclick = () => {
      details.classList.toggle("hidden");
    };

    todosEl.appendChild(div);
  });
}

/* ---------- MAIN RENDER ---------- */

export function render() {
  renderProjects();
  renderTodos();
}
