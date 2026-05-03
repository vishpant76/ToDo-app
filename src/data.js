export function createProject(name) {
  return {
    id: crypto.randomUUID(),
    name,
    todos: [],
  };
}

export function createTodo(title, desc, dueDate, priority) {
  return {
    id: crypto.randomUUID(),
    title,
    desc,
    dueDate,
    priority,
    isComplete: false,
  };
}
