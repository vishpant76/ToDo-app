// import "./styles.css";
// import { greeting } from "./greeting.js";
// src/index.js
// import odinImage from "./odin.png";

// console.log(greeting);
function createTodo(title, description, dueDate, priority) {
  let isComplete = false;
  return { title, description, dueDate, priority, isComplete };
}

// console.log(toDo);
const projects = [];
/* const project = {
  name: "Japanese Studies",
  todos: [],
}; */
/*
text.trim().lowercase()
str1.toLowerCase() === str2.toLowerCase().
 */
/* project.todos.push(todo);
projects.push(project); */
/* console.log(projects);
console.log(projects[0].todos); */
function createProject(name) {
  const newProject = {
    name: name.trim(),
    todos: [],
  };
  projects.push(newProject);
}

function addToProject(projName, todo) {
  /*   let projFound = false;
  for (const project of projects) {
    if (project.name.toLowerCase() === projName.trim().toLowerCase()) {
      project.todos.push(todo);
      projFound = true;
      break;
    }
  }
  if (!projFound) {
    const p = {
      name: projName,
      todos: [todo],
    };
    projects.push(p);
  } */
  const proj = projects.find(
    (p) => p.name.toLowerCase() === projName.trim().toLowerCase(),
  );
  if (!proj) throw new Error("Project does not exist");
  proj.todos.push(todo);
}

const todo1 = createTodo(
  "WK Reviews",
  "Finish WaniKani reviews",
  "29-Apr-2026",
  "Medium",
);

const todo2 = createTodo(
  "BunPro Reviews",
  "Finish BP grammar reviews",
  "29-Apr-2026",
  "Medium",
);

const todo3 = createTodo(
  "Todo list project",
  "Finish Todo list project",
  "1-May-2026",
  "High",
);

createProject("Language Learning");
createProject("Web Dev");
addToProject("Language Learning", todo1);
addToProject("Language Learning", todo2);
addToProject("Web Dev", todo3);
console.log(projects);
/* console.log(projects[0].todos);
console.log(projects[1].todos); */

/* const currentProject = "Language Learning";
const proj = projects.find((p) => p.name === currentProject);
console.log(proj); */
