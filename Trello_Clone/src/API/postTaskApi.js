import axiosClient from "./axiosCLient";

import { setTask } from "../redux/action/taskAction";
export const addTaskAndUpdateServer = (newTaskData) => {
  return async (dispatch, getState) => {
    if (newTaskData) {
      try {
        dispatch({ type: "add/task", payload: newTaskData });
        //   Lấy initial
        const { tasks } = getState().todoState;

        const updatedState = tasks.map((task) => ({
          column: task.column,
          content: task.content,
          columnName: task.column,
        }));

        // Gửi request POST
        const response = await axiosClient.post("/tasks", updatedState);

        dispatch(setTask(response.data.tasks));
      } catch (error) {
        console.log("Error adding task and updating server:", error);
      }
    } else {
      const { tasks } = getState().todoState;
      const updatedState = tasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));
      const response = await axiosClient.post("/tasks", updatedState);

      dispatch(setTask(response.data.tasks));
    }
  };
};

export const deleteColumnAndTasks = (columnName) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "delete/column", payload: columnName });

      const { tasks } = getState().todoState;
      const tasksToDelete = tasks.filter((task) => task.column === columnName);

      tasksToDelete.forEach((task) => {
        dispatch({ type: "delete/task", payload: task._id });
      });

      // Gửi danh sách công việc còn lại lên server
      const remainingTasks = tasks.filter((task) => task.column !== columnName);

      const updatedState = remainingTasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));

      const response = await axiosClient.post("/tasks", updatedState);
    } catch (error) {
      console.log("Error deleting column and tasks:", error);
    }
  };
};
