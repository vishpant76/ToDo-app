import { createProject } from "./data.js";

export const state = {
  projects: [],
  currentProjectId: null,
};

export function addProject(name) {
  const p = createProject(name);
  state.projects.push(p);
  return p;
}

export function setCurrentProject(id) {
  state.currentProjectId = id;
}

export function getCurrentProject() {
  return state.projects.find((p) => p.id === state.currentProjectId);
}
