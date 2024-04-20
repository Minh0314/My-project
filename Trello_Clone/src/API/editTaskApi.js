import { setTask } from "../redux/action/taskAction";
import axiosClient from "./axiosCLient";
// edit name
export const editNameTask = (idTask, newTaskName) => {
  return async (dispatch, getState) => {
    try {
      const { tasks } = getState().todoState;
      const updatedTasks = tasks.map((task) => {
        if (task._id === idTask) {
          return {
            ...task,
            content: newTaskName,
          };
        }
        return task;
      });
      console.log(updatedTasks);
      const updateState = updatedTasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));

      console.log(updateState);
      const response = await axiosClient.post("/tasks", updateState);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

// edit column in task
export const editColumnTask = (updatedTasks) => {
  return async (dispatch, getState) => {
    try {
      const updateState = updatedTasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));

      const response = await axiosClient.post("/tasks", updateState);

      dispatch(setTask(response.data.tasks));
    } catch (error) {
      console.log(error);
    }
  };
};
