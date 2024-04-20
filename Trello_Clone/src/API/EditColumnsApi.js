import axiosClient from "./axiosCLient";
import { setTask } from "../redux/action/taskAction";
import { setColumn } from "../redux/action/columnAction";
export const editNameColumn = (prevName, newColumnName) => {
  console.log("ten truoc", prevName, "ten sau", newColumnName);
  return async (dispatch, getState) => {
    try {
      const { tasks } = getState().todoState;
      const updatedTasks = tasks.map((task) => {
        if (task.column === prevName) {
          return {
            ...task,
            column: newColumnName,
          };
        }
        return task;
      });
      console.log(updatedTasks);
      const updatedState = updatedTasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));
      console.log(updatedState);
      const response = await axiosClient.post("/tasks", updatedState);
      console.log(response);
      dispatch(setTask(response.data.tasks));
      dispatch(setColumn(response.data.columns));

      // Nếu request thành công, cập nhật lại trạng thái tasks trong Redux
    } catch (error) {
      console.log(error);
    }
  };
};
// export const editColumn = (oldIndex, newIndex)=>{
//   return async (dispatch, getState) => {
//     try {
//       const { tasks } = getState().todoState;

//    console.log(tasks);

//       // Nếu request thành công, cập nhật lại trạng thái tasks trong Redux
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
