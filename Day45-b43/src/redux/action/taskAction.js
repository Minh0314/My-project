export const setTask = (tasks) => {
  return {
    type: "fetch/task",
    payload: tasks,
  };
};
export const addTask = (newTask) => {
  return {
    type: "add/task",
    payload: newTask,
  };
};
